<Slide style={{ padding: 0, background: '#FFFFFF' }}>
    <Box style={{ height: 80, background: '#0E3F8C', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40 }}>
        <Text style={{ fontSize: 30, color: '#FFFFFF', fontWeight: 'bold' }}>阳线解剖：开 100 · 收 105 · 高 106 · 低 98</Text>
        <Text style={{ fontSize: 14, color: '#B9CCED' }}>自编示意 · 数值虚构</Text>
    </Box>
    <Box style={{ flex: 1, flexDirection: 'row', padding: 24, gap: 24 }}>
        <Box style={{ width: 560, background: '#F7F9FC', border: '1px solid #E5E7EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 12 }}>
            <svg width={520} height={480} viewBox="0 0 520 480">
                <g stroke="#D6DCE5" strokeWidth="1">
                    <line x1="60" y1="33" x2="480" y2="33" /><line x1="60" y1="100" x2="480" y2="100" />
                    <line x1="60" y1="167" x2="480" y2="167" /><line x1="60" y1="233" x2="480" y2="233" />
                    <line x1="60" y1="267" x2="480" y2="267" /><line x1="60" y1="333" x2="480" y2="333" />
                    <line x1="60" y1="400" x2="480" y2="400" />
                </g>
                <g fill="#8B97A8" fontSize="12" textAnchor="end">
                    <text x="52" y="37">107</text><text x="52" y="104">105</text><text x="52" y="171">103</text>
                    <text x="52" y="237">101</text><text x="52" y="271">100</text><text x="52" y="337">98</text>
                    <text x="52" y="404">96</text>
                </g>
                <line x1="260" y1="67" x2="260" y2="100" stroke="#D43A31" strokeWidth="4" />
                <rect x="220" y="100" width="80" height="167" fill="#D43A31" />
                <line x1="260" y1="267" x2="260" y2="333" stroke="#D43A31" strokeWidth="4" />
                <text x="312" y="71" fill="#4A5568" fontSize="14">最高 106（到过，没站住）</text>
                <text x="312" y="106" fill="#1A2230" fontSize="14" fontWeight="bold">收盘 105</text>
                <text x="312" y="184" fill="#D43A31" fontSize="14" fontWeight="bold">实体：开 100 到 收 105</text>
                <text x="312" y="271" fill="#1A2230" fontSize="14" fontWeight="bold">开盘 100</text>
                <text x="312" y="337" fill="#4A5568" fontSize="14">最低 98（被砸下去，被接住）</text>
                <text x="100" y="450" fill="#8B97A8" fontSize="13">红色 = 阳线：收高于开，这 5 分钟买方赢了</text>
            </svg>
        </Box>
        <Box style={{ flex: 1, flexDirection: 'column', gap: 12 }}>
            {[
                ['1', '5 分钟开始，第一笔成交 100 —— 开盘价'],
                ['2', '有人着急卖，价格被砸到 98，有人接住 —— 最低价'],
                ['3', '买方反攻，一口气推到 106，推不动了 —— 最高价'],
                ['4', '时间到，最后停在 105 —— 收盘价'],
            ].map((s, i) => (
                <Box key={i} style={{ flexDirection: 'row', alignItems: 'center', gap: 14, background: '#F7F9FC', border: '1px solid #E5E7EB', borderRadius: 8, padding: 14 }}>
                    <Box style={{ width: 30, height: 30, background: '#1E4FA8', borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 'bold' }}>{s[0]}</Text>
                    </Box>
                    <Text style={{ flex: 1, fontSize: 17, color: '#1A2230', lineHeight: 1.45 }}>{s[1]}</Text>
                </Box>
            ))}
            <Box style={{ flex: 1, background: '#E8EFF8', borderRadius: 8, padding: 18, justifyContent: 'center' }}>
                <Text style={{ fontSize: 19, color: '#0E3F8C', fontWeight: 'bold', lineHeight: 1.6 }}>这根 K 线只记 4 个数。粗块叫实体（站住的部分），细线叫影线（到过、没站住的部分）。</Text>
            </Box>
        </Box>
    </Box>
    <Box style={{ height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40 }}>
        <Text style={{ fontSize: 14, color: '#8B97A8' }}>Brooks 价格行为学习 · 趋势卷</Text>
        <Text style={{ fontSize: 14, color: '#1E4FA8' }}>07 / 11</Text>
    </Box>
</Slide>
