#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""build_site.py — 把学习仓库变成可浏览的本地学习网站。
扫描 books/<book>/chapters/<ch>/ 下的 lessons/*.md 与 exercises/*.md（不含 *-answers.md），
生成 site/ 下的静态页面：首页 + 各书章节目录 + 讲义页 + 习题页（导航互联）。
用法: python3 tools/build_site.py   （在仓库根目录运行）
规则: 答案页不生成进站点；动画/图解以按钮链接到原 HTML 文件。"""
import os, re, html, json, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = os.path.join(ROOT, "site")

BOOK_META = {
    "trends": ("高级趋势技术分析", "第 1 本 · 学习中"),
    "ranges": ("高级波段技术分析", "第 2 本 · 未开始"),
    "reversals-1": ("高级反转技术分析（上册）", "第 3 本 · 未开始"),
    "reversals-2": ("高级反转技术分析（下册）", "第 4 本 · 未开始"),
}

def esc(s):
    return html.escape(s, quote=False)

def inline(s):
    s = esc(s)
    s = re.sub(r"\*\*([^*]+)\*\*", r'<b style="color:#e8eaed">\1</b>', s)
    s = re.sub(r"`([^`]+)`", r'<code style="background:#2c3138;padding:1px 6px;border-radius:4px;color:#7dd3fc">\1</code>', s)
    return s

def md_to_html(md):
    lines = md.split("\n")
    out, i = [], 0
    while i < len(lines):
        ln = lines[i]
        if not ln.strip():
            i += 1; continue
        m = re.match(r"^(#{1,4})\s+(.*)", ln)
        if m:
            lvl = len(m.group(1))
            out.append('<h%d>%s</h%d>' % (lvl, inline(m.group(2)), lvl))
            i += 1; continue
        if ln.strip().startswith("|"):
            tbl = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                tbl.append(lines[i]); i += 1
            rows = [[c.strip() for c in r.strip().strip("|").split("|")] for r in tbl]
            rows = [r for r in rows if not all(re.match(r"^:?-{2,}:?$", c) for c in r)]
            h = "<table class='tb'>"
            for ri, r in enumerate(rows):
                tag = "th" if ri == 0 else "td"
                h += "<tr>" + "".join("<%s>%s</%s>" % (tag, inline(c), tag) for c in r) + "</tr>"
            out.append(h + "</table>"); continue
        if ln.strip().startswith("> "):
            q = []
            while i < len(lines) and lines[i].strip().startswith(">"):
                q.append(lines[i].strip().lstrip("> ")); i += 1
            out.append('<blockquote>%s</blockquote>' % "<br>".join(inline(x) for x in q if x)); continue
        if re.match(r"^\s*-\s+", ln):
            items = []
            while i < len(lines) and re.match(r"^\s*-\s+", lines[i]):
                items.append(re.sub(r"^\s*-\s+", "", lines[i])); i += 1
            out.append("<ul>" + "".join("<li>%s</li>" % inline(x) for x in items) + "</ul>"); continue
        if re.match(r"^\s*\d+\.\s+", ln):
            items = []
            while i < len(lines) and re.match(r"^\s*\d+\.\s+", lines[i]):
                items.append(re.sub(r"^\s*\d+\.\s+", "", lines[i])); i += 1
            out.append("<ol>" + "".join("<li>%s</li>" % inline(x) for x in items) + "</ol>"); continue
        para = [ln]
        while i + 1 < len(lines) and lines[i + 1].strip() and not re.match(r"^(#{1,4}\s|\s*-\s|\s*\d+\.\s|\||>)", lines[i + 1]):
            i += 1; para.append(lines[i])
        out.append("<p>%s</p>" % "<br>".join(inline(x) for x in para))
        i += 1
    return "\n".join(out)

def ex_form(md, page_id):
    """为习题页生成答题区：每题一个输入框 + 保存草稿(localStorage) + 一键复制答案。"""
    qs = re.findall(r"\*\*(第[^*]{0,40}?题[^*]{0,40}?)\*\*", md)
    if not qs:
        return ""
    areas = []
    for i, q in enumerate(qs):
        areas.append('<div class="qa"><div class="qt">%s</div><textarea id="ta%d" placeholder="在这里写答案。写完点「复制全部答案」，粘贴到对话里发给教练批改"></textarea></div>' % (esc(q), i))
    titles_js = json.dumps(qs, ensure_ascii=False)
    return ('<h2>作答区</h2>' + "".join(areas) +
            '<div class="qbtns"><button onclick="saveDraft()">保存草稿</button>'
            '<button onclick="copyAll()">复制全部答案</button><span id="saved"></span></div>'
            '<div class="foot">草稿只存在你自己浏览器里；批改由教练在对话中进行，本页不含参考答案。</div>'
            '<script>var PID=%s,TITLES=%s,N=TITLES.length;' % (json.dumps(page_id), titles_js) +
            'function saveDraft(){for(var i=0;i<N;i++){localStorage.setItem(PID+":ta"+i,document.getElementById("ta"+i).value)}'
            'document.getElementById("saved").textContent="草稿已存 "+new Date().toLocaleTimeString()}'
            'function copyAll(){var out=[];for(var i=0;i<N;i++){out.push("【"+TITLES[i]+"】\\n"+document.getElementById("ta"+i).value)}'
            'var txt=out.join("\\n\\n");'
            'function ok(){document.getElementById("saved").textContent="已复制，去对话里粘贴发给教练"}'
            'if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(ok,function(){fallback()})}else{fallback()}'
            'function fallback(){var t=document.createElement("textarea");t.value=txt;document.body.appendChild(t);t.select();try{document.execCommand("copy");ok()}catch(e){document.getElementById("saved").textContent="复制失败，请手动全选答案框内容"}document.body.removeChild(t)}}'
            'window.onload=function(){for(var i=0;i<N;i++){var v=localStorage.getItem(PID+":ta"+i);if(v){document.getElementById("ta"+i).value=v}}};'
            '</script>')

PAGE = """<!DOCTYPE html>
<html lang="zh-CN"><head><meta charset="utf-8"><title>__TITLE__</title>
<style>
body{margin:0;background:#1b1d21;color:#d7dae0;font:14.5px/1.75 "PingFang SC","Microsoft YaHei",sans-serif}
.nav{background:#23262b;border-bottom:1px solid #33373e;padding:10px 22px;display:flex;gap:16px;align-items:center;flex-wrap:wrap}
.nav a{color:#4fc1ff;text-decoration:none;font-size:13.5px}
.nav a:hover{text-decoration:underline}
.nav .pos{color:#8b929e;font-size:13px}
.wrap{max-width:860px;margin:0 auto;padding:20px 26px 60px}
h1{font-size:24px;color:#e8eaed;border-bottom:2px solid #4fc1ff;padding-bottom:8px;margin:14px 0}
h2{font-size:19px;color:#9ecbff;margin:26px 0 8px}
h3{font-size:16.5px;color:#c4ccd6;margin:20px 0 6px}
h4{font-size:15px;color:#c4ccd6}
p{margin:8px 0}
ul,ol{margin:6px 0;padding-left:24px}
li{margin:4px 0}
blockquote{background:#20262e;border-left:3px solid #f59e0b;border-radius:0 6px 6px 0;padding:10px 14px;margin:10px 0;color:#dbe2ea}
.tb{border-collapse:collapse;width:100%;margin:12px 0;font-size:13.5px}
.tb th{background:#262a30;color:#9ecbff;text-align:left;padding:7px 10px;border:1px solid #33373e}
.tb td{padding:7px 10px;border:1px solid #33373e;color:#c4ccd6}
.qa{margin:14px 0}
.qt{color:#9ecbff;font-weight:600;margin-bottom:6px;font-size:14px}
.qa textarea{width:100%;min-height:110px;background:#1f2226;color:#d7dae0;border:1px solid #3d434c;border-radius:8px;padding:10px;font:14px/1.6 "PingFang SC","Microsoft YaHei",sans-serif;box-sizing:border-box}
.qa textarea:focus{border-color:#4fc1ff;outline:none}
.qbtns{display:flex;gap:12px;align-items:center;margin:10px 0}
.qbtns button{background:#20262e;border:1px solid #4fc1ff;color:#4fc1ff;border-radius:7px;padding:8px 18px;font-size:14px;cursor:pointer}
.qbtns button:hover{background:#26303a}
#saved{color:#8b929e;font-size:12.5px}
.mats{display:flex;gap:12px;flex-wrap:wrap;margin:14px 0}
.mats a{display:inline-block;background:#20262e;border:1px solid #4fc1ff;color:#4fc1ff;border-radius:7px;padding:8px 16px;text-decoration:none;font-size:14px}
.mats a:hover{background:#26303a}
.foot{margin-top:36px;padding-top:12px;border-top:1px solid #33373e;color:#7c8590;font-size:12.5px}
.card{display:block;background:#23262b;border:1px solid #33373e;border-left:4px solid #4fc1ff;border-radius:8px;padding:12px 16px;margin:10px 0;text-decoration:none}
.card:hover{border-color:#4fc1ff}
.card .t{color:#e8eaed;font-weight:600;font-size:15.5px}
.card .s{color:#8b929e;font-size:12.5px;margin-top:3px}
.tag{float:right;font-size:12px;color:#f59e0b}
</style></head><body>
<div class="nav">__NAV__</div>
<div class="wrap">__BODY__</div>
</body></html>"""

def page(title, nav, body):
    return PAGE.replace("__TITLE__", esc(title)).replace("__NAV__", nav).replace("__BODY__", body)

def rel(depth, path):
    return "/".join([".."] * depth) + "/" + path

def main():
    os.makedirs(SITE, exist_ok=True)
    books_dir = os.path.join(ROOT, "books")
    site_index_cards = []
    for book in sorted(os.listdir(books_dir)):
        bdir = os.path.join(books_dir, book)
        if not os.path.isdir(bdir):
            continue
        bname, bstatus = BOOK_META.get(book, (book, ""))
        chapters = []
        cdir = os.path.join(bdir, "chapters")
        if os.path.isdir(cdir):
            for ch in sorted(os.listdir(cdir)):
                chdir = os.path.join(cdir, ch)
                if not os.path.isdir(chdir):
                    continue
                lessons, exs, anims = [], [], []
                ldir = os.path.join(chdir, "lessons")
                if os.path.isdir(ldir):
                    for f in sorted(os.listdir(ldir)):
                        if f.endswith(".md"):
                            lessons.append((f, os.path.join(ldir, f)))
                        elif f.endswith(".html"):
                            anims.append((f, rel(3, os.path.join("books", book, "chapters", ch, "lessons", f))))
                adir = os.path.join(chdir, "animations")
                if os.path.isdir(adir):
                    for f in sorted(os.listdir(adir)):
                        if f.endswith(".html"):
                            anims.append((f, rel(3, os.path.join("books", book, "chapters", ch, "animations", f))))
                edir = os.path.join(chdir, "exercises")
                if os.path.isdir(edir):
                    for f in sorted(os.listdir(edir)):
                        if f.endswith(".md") and not f.endswith("-answers.md"):
                            exs.append((f, os.path.join(edir, f)))
                if lessons or exs:
                    chapters.append((ch, lessons, exs, anims))
        if not chapters:
            continue
        outdir = os.path.join(SITE, book)
        os.makedirs(outdir, exist_ok=True)
        # 生成讲义页与习题页
        all_pages = []
        for ch, lessons, exs, anims in chapters:
            pages_seq = [(f, p, "lesson") for f, p in lessons] + [(f, p, "ex") for f, p in exs]
            for idx, (f, path, kind) in enumerate(pages_seq):
                md = open(path, encoding="utf-8").read()
                title = f.replace(".md", "")
                mats = []
                for af, apath in anims:
                    mats.append('<a href="%s">打开图解/动画：%s</a>' % (apath.replace(rel(3, ""), rel(2, "")), esc(af.replace(".html", ""))))
                if kind == "lesson":
                    for ef, _ in exs:
                        mats.append('<a href="%s">做随堂检查：%s</a>' % (ef.replace(".md", ".html"), esc(ef.replace(".md", ""))))
                prev_l = '<a href="%s">← 上一页</a>' % (pages_seq[idx - 1][0].replace(".md", ".html")) if idx > 0 else ""
                next_l = '<a href="%s">下一页 →</a>' % (pages_seq[idx + 1][0].replace(".md", ".html")) if idx < len(pages_seq) - 1 else ""
                nav = '<a href="../index.html">首页</a> <span class="pos">%s / %s</span> %s %s <a href="%s">思维导图</a>' % (
                    esc(bname), esc(ch), prev_l, next_l, rel(2, os.path.join("books", book, "mindmap", book + "-map.html")))
                body = md_to_html(md)
                if kind == "ex":
                    body += ex_form(md, book + "/" + title)
                if mats:
                    body = '<div class="mats">%s</div>' % "".join(mats) + body
                body += '<div class="foot">本页由仓库内容生成 · 原书引用以 PDF 页锚点为准 · 学习笔记非原书内容</div>'
                open(os.path.join(outdir, title + ".html"), "w", encoding="utf-8").write(page(title, nav, body))
                all_pages.append((title, kind, bname, ch))
        # 书目索引页
        cards = []
        for t, kind, _, ch in all_pages:
            label = "习题" if kind == "ex" else "讲义"
            cards.append('<a class="card" href="%s/%s.html"><span class="tag">%s</span><div class="t">%s</div><div class="s">%s · %s</div></a>' % (
                book, t, label, esc(t), esc(ch), label))
        site_index_cards.append((book, bname, bstatus, "".join(cards)))
    # 首页
    home_cards = []
    for book, bname, bstatus, cards in site_index_cards:
        home_cards.append('<h2 style="margin-top:26px">%s <span style="font-size:13px;color:#f59e0b">%s</span></h2>%s' % (esc(bname), esc(bstatus), cards))
    for book, (bname, bstatus) in BOOK_META.items():
        if not any(b == book for b, _, _, _ in site_index_cards):
            home_cards.append('<h2 style="margin-top:26px;color:#5b626c">%s <span style="font-size:13px">%s</span></h2><p style="color:#5b626c">尚未开始（按顺序学习到本書时建立学习空间）</p>' % (esc(bname), esc(bstatus)))
    nav = '<span class="pos">Brooks 价格行为四本书 · 学习站点</span> <a href="' + rel(1, "maps/overview.html") + '">四本书关系总图</a>'
    body = "<h1>学习首页</h1><p>按原书章节顺序逐节学习：讲义、图解动画、随堂检查都在下面。每学完一节，这里多一页。</p>" + "".join(home_cards)
    body += '<div class="foot">本地学习站点 · 由 tools/build_site.py 生成 · 公开发布（如 GitHub Pages）需单独确认</div>'
    open(os.path.join(SITE, "index.html"), "w", encoding="utf-8").write(page("学习首页", nav, body))
    print("site built:", SITE)

if __name__ == "__main__":
    main()
