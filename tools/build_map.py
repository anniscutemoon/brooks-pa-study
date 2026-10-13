#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""build_map.py — 由导图数据 JSON 生成可折叠思维导图 HTML（暗色）。
用法: python3 build_map.py <book-data.json> <输出.html>
数据来源: 各书 mindmap/<book>-data.json（可编辑源文件，改完重跑本脚本即可）。
评级为教学初评，精读时修订；页码区分印刷页与PDF页，标"待核实"的不得引用。"""
import json, sys, html

STATUS_COLOR = {
    "未学": "#6b7280", "学习中": "#f59e0b", "提示下完成": "#a78bfa",
    "可独立解释": "#34d399", "可独立应用": "#22d3ee", "待复习": "#f472b6",
}

def stars(n, color):
    return '<span style="color:%s;letter-spacing:1px">%s</span><span style="color:#4b5563">%s</span>' % (
        color, "★" * n, "★" * (5 - n))

def esc(s):
    return html.escape(str(s), quote=True)

def main(src, out):
    data = json.load(open(src, encoding="utf-8"))
    book = data["book"]
    nodes_js = {}
    rows = []
    for part in data["parts"]:
        rows.append('<details open class="part"><summary>%s <span class="psum">%s</span></summary>' % (
            esc(part["title"]), esc(part.get("summary", ""))))
        for c in part["chapters"]:
            nodes_js[c["id"]] = {
                "id": c["id"], "title": c["title"],
                "print_page": c.get("print_page"), "pdf_page": c.get("pdf_page"),
                "difficulty": c["difficulty"], "importance": c["importance"],
                "rating_note": c["rating_note"], "prereq": c["prereq"],
                "outcome": c["outcome"], "summary": c["summary"],
                "status": c["status"], "links": c.get("links", {}),
            }
            sc = STATUS_COLOR.get(c["status"], "#6b7280")
            rows.append(
                '<div class="chnode" onclick="showNode(\'%s\')">'
                '<span class="dot" style="background:%s" title="%s"></span>'
                '<span class="cid">%s</span> <span class="ctitle">%s</span>'
                '<span class="cstars">难 %s 重 %s</span></div>'
                % (c["id"], sc, esc(c["status"]), c["id"], esc(c["title"]),
                   stars(c["difficulty"], "#f59e0b"), stars(c["importance"], "#22d3ee")))
        rows.append('</details>')
    tree = "\n".join(rows)
    js = json.dumps(nodes_js, ensure_ascii=False)
    goal = esc(book.get("goal", "")).replace("\n", "<br>")
    page = PAGE.replace("__TITLE__", esc(book["title"])).replace("__TREE__", tree) \
        .replace("__GOAL__", goal).replace("__BOOK__", esc(book["title"])) \
        .replace("__EN__", esc(book.get("english", ""))).replace("__AUTHOR__", esc(book.get("author", ""))) \
        .replace("__TRANS__", esc(book.get("translator", ""))).replace("__PUB__", esc(book.get("publisher", ""))) \
        .replace("__YEAR__", esc(book.get("year", ""))).replace("__ISBN__", esc(book.get("isbn", ""))) \
        .replace("__PDFP__", str(book.get("pdf_pages", ""))).replace("__PAGEMAP__", esc(book.get("page_map", ""))) \
        .replace("__OCR__", esc(book.get("ocr", ""))).replace("__JSON__", js)
    open(out, "w", encoding="utf-8").write(page)
    print("written:", out)

PAGE = """<!DOCTYPE html>
<html lang="zh-CN"><head><meta charset="utf-8">
<title>__TITLE__ · 思维导图</title>
<style>
body{margin:0;background:#1b1d21;color:#d7dae0;font:14px/1.6 "PingFang SC","Microsoft YaHei",sans-serif}
.wrap{width:1180px;margin:0 auto;padding:18px}
h1{font-size:20px;color:#e8eaed;margin:6px 0 2px}
.meta{color:#8b929e;font-size:12.5px;margin-bottom:10px}
.meta b{color:#aeb6c2;font-weight:600}
table.layout{border-collapse:collapse;width:1180px;table-layout:fixed}
td{vertical-align:top}
td.l{width:560px;padding-right:14px}
td.r{width:606px}
.panel{background:#23262b;border:1px solid #33373e;border-radius:8px;padding:12px 14px}
.part{margin:4px 0}
.part>summary{cursor:pointer;font-weight:600;color:#9ecbff;padding:5px 6px;background:#262a30;border-radius:6px;list-style:none}
.part>summary:before{content:"- ";color:#4fc1ff}
.part:not([open])>summary:before{content:"+ "}
.psum{color:#7c8590;font-weight:400;font-size:12px;margin-left:8px}
.chnode{cursor:pointer;padding:4px 6px 4px 16px;border-radius:5px;margin:2px 0 2px 8px}
.chnode:hover{background:#2c3138}
.dot{display:inline-block;width:9px;height:9px;border-radius:5px;margin-right:7px}
.cid{color:#4fc1ff;font-size:12px;margin-right:4px}
.ctitle{color:#d7dae0}
.cstars{float:right;font-size:11px;color:#8b929e;white-space:nowrap}
.legend span{display:inline-block;margin-right:14px;font-size:12px;color:#9aa1ab}
.legend i{display:inline-block;width:9px;height:9px;border-radius:5px;margin-right:5px}
h3{color:#e8eaed;font-size:15px;margin:2px 0 8px}
.kv{color:#aeb6c2;font-size:13px;margin:5px 0}
.kv b{color:#7dd3fc;font-weight:600}
.lbl{display:inline-block;min-width:74px;color:#8b929e}
.tag{display:inline-block;background:#2c3138;border-radius:4px;padding:0 7px;font-size:11.5px;color:#f59e0b;margin-left:6px}
.goalbox{background:#20262e;border-left:3px solid #4fc1ff;padding:9px 12px;border-radius:0 6px 6px 0;color:#c4ccd6;font-size:13px;margin:10px 0}
.note{color:#7c8590;font-size:12px;margin-top:10px}
a{color:#4fc1ff;text-decoration:none}
</style></head><body><div class="wrap">
<h1>__BOOK__ · 思维导图</h1>
<div class="meta">原名 <b>__EN__</b> ｜ 作者 __AUTHOR__ ｜ 译者 __TRANS__ ｜ __PUB__ __YEAR__ ｜ ISBN __ISBN__<br>
PDF共 __PDFP__ 页 ｜ 页码规则：__PAGEMAP__<br>读取情况：__OCR__</div>
<div class="goalbox"><b style="color:#7dd3fc">学完这本书你能做到什么：</b><br>__GOAL__</div>
<table class="layout"><tr>
<td class="l"><div class="panel">
<div class="legend">
<span><i style="background:#6b7280"></i>未学</span><span><i style="background:#f59e0b"></i>学习中</span>
<span><i style="background:#a78bfa"></i>提示下完成</span><span><i style="background:#34d399"></i>可独立解释</span>
<span><i style="background:#22d3ee"></i>可独立应用</span><span><i style="background:#f472b6"></i>待复习</span>
</div>
__TREE__
<div class="note">点任意章节，右侧看详情。难度=橙星，重要=蓝星（教学初评，随精读与你的表现修订，不是作者评级）。</div>
</div></td>
<td class="r"><div class="panel" id="detail"><h3>章节详情</h3><div class="kv">点击左侧任意章节。</div></div></td>
</tr></table>
</div>
<script>
var NODES = __JSON__;
function esc(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;")}
function stars(n,c){var s="";for(var i=0;i<5;i++){s+='<span style="color:'+(i<n?c:"#4b5563")+'">★</span>'}return s}
function showNode(id){
  var n=NODES[id]; if(!n) return;
  var L=n.links||{};
  function lk(name,path){return path?('<a href="'+esc(path)+'">'+name+'</a>'):('<span style="color:#5b626c">'+name+'（待生成）</span>')}
  document.getElementById("detail").innerHTML =
   '<h3>'+esc(n.id)+' '+esc(n.title)+'</h3>'
   +'<div class="kv"><span class="lbl">原书位置</span>印刷页 '+esc(n.print_page||"待核实")+' ｜ PDF页 '+esc(n.pdf_page||"待核实")+'<span class="tag">页码已核实才标注</span></div>'
   +'<div class="kv"><span class="lbl">一句话</span>'+esc(n.summary)+'</div>'
   +'<div class="kv"><span class="lbl">难度</span>'+stars(n.difficulty,"#f59e0b")+'　<span class="lbl">重要</span>'+stars(n.importance,"#22d3ee")+'</div>'
   +'<div class="kv"><span class="lbl">评级理由</span>'+esc(n.rating_note)+'</div>'
   +'<div class="kv"><span class="lbl">先修知识</span>'+esc(n.prereq)+'</div>'
   +'<div class="kv"><span class="lbl">学完能做</span>'+esc(n.outcome)+'</div>'
   +'<div class="kv"><span class="lbl">当前状态</span><b style="color:#f59e0b">'+esc(n.status)+'</b></div>'
   +'<div class="kv"><span class="lbl">学习材料</span>'+lk("讲义",L.lesson)+' ｜ '+lk("动画",L.animation)+' ｜ '+lk("习题",L.exercise)+' ｜ '+lk("实操",L.practice)+'</div>';
}
</script></body></html>"""

if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
