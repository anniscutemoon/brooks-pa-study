<Slide style={{ padding: 0, background: '#FFFFFF' }}>
    <Box style={{ height: 80, background: '#0E3F8C', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40 }}>
        <Text style={{ fontSize: 30, color: '#FFFFFF', fontWeight: 'bold' }}>术语大白话（随时回来查）</Text>
        <Text style={{ fontSize: 14, color: '#B9CCED' }}>本讲 7 个 · 一句一行</Text>
    </Box>
    <Box style={{ flex: 1, flexDirection: 'row', padding: 26, gap: 24 }}>
        <Box style={{ width: 260, background: '#0E3F8C', borderRadius: 10, padding: 26, justifyContent: 'center', gap: 12 }}>
            <Text style={{ fontSize: 26, color: '#FFFFFF', fontWeight: 'bold', lineHeight: 1.5 }}>黑话<br/>翻译器</Text>
            <Text style={{ fontSize: 15, color: '#B9CCED', lineHeight: 1.7 }}>以后每讲的新术语都会这样翻一遍，并汇总进总术语表。</Text>
        </Box>
        <Box style={{ flex: 1, flexDirection: 'column', gap: 8 }}>
            {[
                ['开盘价 open', '这段时间的第一笔成交价'],
                ['收盘价 close', '这段时间的最后一笔成交价'],
                ['最高价 high / 最低价 low', '这段时间到过的两个极端价格'],
                ['实体 body', '开盘价到收盘价之间那个粗块'],
                ['影线 wick', '实体上下伸出的细线：到过、没站住的地方'],
                ['阳线 / 阴线', '收高于开（红）/ 收低于开（绿）'],
                ['K 线 candlestick', '把一段时间浓缩成的这根小柱子'],
            ].map((t, i) => (
                <Box key={i} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 14, background: '#F7F9FC', border: '1px solid #E5E7EB', borderRadius: 8, paddingLeft: 16, paddingRight: 16 }}>
                    <Text style={{ fontSize: 16, color: '#1E4FA8', fontWeight: 'bold', width: 210 }}>{t[0]}</Text>
                    <Text style={{ flex: 1, fontSize: 16, color: '#1A2230' }}>{t[1]}</Text>
                </Box>
            ))}
        </Box>
    </Box>
    <Box style={{ height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40 }}>
        <Text style={{ fontSize: 14, color: '#8B97A8' }}>Brooks 价格行为学习 · 趋势卷</Text>
        <Text style={{ fontSize: 14, color: '#1E4FA8' }}>10 / 11</Text>
    </Box>
</Slide>
