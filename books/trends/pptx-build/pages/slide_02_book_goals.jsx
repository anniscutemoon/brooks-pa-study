<Slide style={{ padding: 0, background: '#FFFFFF' }}>
    <Box style={{ height: 80, background: '#0E3F8C', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40 }}>
        <Text style={{ fontSize: 30, color: '#FFFFFF', fontWeight: 'bold' }}>这本书学完，你能做到什么</Text>
        <Text style={{ fontSize: 14, color: '#B9CCED' }}>全书目标 · 可观察动作</Text>
    </Box>
    <Box style={{ flex: 1, flexDirection: 'row', padding: 28, gap: 24 }}>
        <Box style={{ width: 300, background: '#0E3F8C', borderRadius: 10, padding: 28, justifyContent: 'center', gap: 14 }}>
            <Text style={{ fontSize: 72, color: '#FFFFFF', fontWeight: 'bold' }}>5</Text>
            <Text style={{ fontSize: 22, color: '#E8EFF8', lineHeight: 1.5 }}>项能独立完成的动作</Text>
            <Text style={{ fontSize: 15, color: '#B9CCED', lineHeight: 1.6 }}>不说"理解、掌握"这类没法检验的词，每一条都能在一张新图表上做出来。</Text>
        </Box>
        <Box style={{ flex: 1, flexDirection: 'column', gap: 12 }}>
            {[
                ['1', '说清市场只有趋势和区间两种状态，并且会互相转换'],
                ['2', '在新图表上指出趋势K线、十字星、信号K线、入场K线、二次入场点'],
                ['3', '画出趋势线与通道，并说明什么情况下它们失效'],
                ['4', '说出判断趋势强弱的特征清单，并给一张图的趋势强度打分'],
                ['5', '指认急速+通道、楼梯、趋势恢复等常见形态，说出每种形态接下来的大概率走法（概率，不是保证）'],
            ].map((it, i) => (
                <Box key={i} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 16, background: '#F7F9FC', borderRadius: 8, paddingLeft: 16, paddingRight: 16, border: '1px solid #E5E7EB' }}>
                    <Box style={{ width: 34, height: 34, background: '#1E4FA8', borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, color: '#FFFFFF', fontWeight: 'bold' }}>{it[0]}</Text>
                    </Box>
                    <Text style={{ flex: 1, fontSize: 17, color: '#1A2230', lineHeight: 1.45 }}>{it[1]}</Text>
                </Box>
            ))}
        </Box>
    </Box>
    <Box style={{ height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40 }}>
        <Text style={{ fontSize: 14, color: '#8B97A8' }}>Brooks 价格行为学习 · 趋势卷</Text>
        <Text style={{ fontSize: 14, color: '#1E4FA8' }}>02 / 11</Text>
    </Box>
</Slide>
