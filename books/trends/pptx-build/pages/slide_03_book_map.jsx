<Slide style={{ padding: 0, background: '#FFFFFF' }}>
    <Box style={{ height: 80, background: '#0E3F8C', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40 }}>
        <Text style={{ fontSize: 30, color: '#FFFFFF', fontWeight: 'bold' }}>全书地图：4 篇 26 章</Text>
        <Text style={{ fontSize: 14, color: '#B9CCED' }}>结构已核实 · 不跳章</Text>
    </Box>
    <Box style={{ flex: 1, flexDirection: 'row', padding: 28, gap: 24 }}>
        <Box style={{ flex: 1.5, flexDirection: 'column', gap: 12 }}>
            {[
                ['第一篇', '价格行为（第 1-12 章）', 'K线语言与市场语法：信号K线、入场K线、二次入场点', true],
                ['第二篇', '趋势线与通道（第 13-17 章）', '用线把市场结构框出来：趋势线、通道、摆动点', false],
                ['第三篇', '趋势（第 18-20 章）', '把趋势当成可交易对象：强度清单、两段式行情', false],
                ['第四篇', '常见趋势形态（第 21-26 章）', '六种反复出现的趋势日原型', false],
            ].map((p, i) => (
                <Box key={i} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 16, background: p[3] ? '#E8EFF8' : '#F7F9FC', border: p[3] ? '2px solid #1E4FA8' : '1px solid #E5E7EB', borderRadius: 8, paddingLeft: 18, paddingRight: 18 }}>
                    <Text style={{ fontSize: 17, color: '#1E4FA8', fontWeight: 'bold', width: 62 }}>{p[0]}</Text>
                    <Box style={{ flex: 1 }}>
                        <Text style={{ fontSize: 18, color: '#1A2230', fontWeight: 'bold' }}>{p[1]}</Text>
                        <Text style={{ fontSize: 14, color: '#4A5568' }}>{p[2]}</Text>
                    </Box>
                </Box>
            ))}
            <Text style={{ fontSize: 14, color: '#D9534F' }}>▲ 蓝框 = 当前学习区：第一篇之前还有「引言」（正在学）</Text>
        </Box>
        <Box style={{ flex: 1, flexDirection: 'column', gap: 12 }}>
            <Box style={{ background: '#F0F5FC', borderRadius: 8, padding: 18, flex: 1.2 }}>
                <Text style={{ fontSize: 18, color: '#1E4FA8', fontWeight: 'bold' }}>这份讲义怎么用</Text>
                <Text style={{ fontSize: 15, color: '#1A2230', lineHeight: 1.7, marginTop: 8 }}>每学一章，追加一组页面：学习目标 → 讲解 → 图解 → 随堂检查 → 术语大白话。复习时从后往前翻术语页最快。</Text>
            </Box>
            <Box style={{ background: '#F7F9FC', border: '1px solid #E5E7EB', borderRadius: 8, padding: 18, flex: 1 }}>
                <Text style={{ fontSize: 18, color: '#1E4FA8', fontWeight: 'bold' }}>两条规矩</Text>
                <Text style={{ fontSize: 15, color: '#1A2230', lineHeight: 1.7, marginTop: 8 }}>按原书顺序学，不跳章。难度与重要程度星级是教学初评，随精读和你的作答修订，不是作者评级。</Text>
            </Box>
        </Box>
    </Box>
    <Box style={{ height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40 }}>
        <Text style={{ fontSize: 14, color: '#8B97A8' }}>Brooks 价格行为学习 · 趋势卷</Text>
        <Text style={{ fontSize: 14, color: '#1E4FA8' }}>03 / 11</Text>
    </Box>
</Slide>
