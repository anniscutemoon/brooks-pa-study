<Slide style={{ padding: 0, background: '#FFFFFF' }}>
    <Box style={{ height: 80, background: '#0E3F8C', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40 }}>
        <Text style={{ fontSize: 30, color: '#FFFFFF', fontWeight: 'bold' }}>阴线对照：影线 vs 实体</Text>
        <Text style={{ fontSize: 14, color: '#B9CCED' }}>自编示意 · 数值虚构</Text>
    </Box>
    <Box style={{ flex: 1, flexDirection: 'row', padding: 24, gap: 24 }}>
        <Box style={{ flex: 1.4, flexDirection: 'column', gap: 12 }}>
            <Box style={{ background: '#F7F9FC', border: '1px solid #E5E7EB', borderRadius: 8, padding: 18, flex: 1 }}>
                <Text style={{ fontSize: 19, color: '#1E4FA8', fontWeight: 'bold' }}>实体 = 站住的部分</Text>
                <Text style={{ fontSize: 17, color: '#1A2230', lineHeight: 1.6, marginTop: 6 }}>从开盘价到收盘价这一段。时间结束时价格停在这里，是多空争夺后"落袋"的结果。</Text>
            </Box>
            <Box style={{ background: '#F7F9FC', border: '1px solid #E5E7EB', borderRadius: 8, padding: 18, flex: 1 }}>
                <Text style={{ fontSize: 19, color: '#D9534F', fontWeight: 'bold' }}>影线 = 到过、没站住</Text>
                <Text style={{ fontSize: 17, color: '#1A2230', lineHeight: 1.6, marginTop: 6 }}>冲出去又被推回来的那段。它不是没用——它记录了哪里有人阻击、哪里有人接货。</Text>
            </Box>
            <Box style={{ background: '#E8EFF8', borderRadius: 8, padding: 18, flex: 1 }}>
                <Text style={{ fontSize: 19, color: '#0E3F8C', fontWeight: 'bold' }}>判断输赢只看开和收</Text>
                <Text style={{ fontSize: 17, color: '#1A2230', lineHeight: 1.6, marginTop: 6 }}>收高于开 → 红（阳线，买方赢）；收低于开 → 绿（阴线，卖方赢）。中途冲多高都不算赢。</Text>
            </Box>
        </Box>
        <Box style={{ flex: 1, background: '#F7F9FC', border: '1px solid #E5E7EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 12 }}>
            <svg width={380} height={480} viewBox="0 0 380 480">
                <g stroke="#D6DCE5" strokeWidth="1">
                    <line x1="50" y1="33" x2="360" y2="33" /><line x1="50" y1="100" x2="360" y2="100" />
                    <line x1="50" y1="200" x2="360" y2="200" /><line x1="50" y1="333" x2="360" y2="333" />
                    <line x1="50" y1="367" x2="360" y2="367" />
                </g>
                <g fill="#8B97A8" fontSize="12" textAnchor="end">
                    <text x="42" y="37">107</text><text x="42" y="104">105</text><text x="42" y="337">98</text><text x="42" y="371">97</text>
                </g>
                <line x1="170" y1="33" x2="170" y2="100" stroke="#2FA35A" strokeWidth="4" />
                <rect x="134" y="100" width="72" height="233" fill="#2FA35A" />
                <line x1="170" y1="333" x2="170" y2="367" stroke="#2FA35A" strokeWidth="4" />
                <text x="216" y="40" fill="#4A5568" fontSize="13">最高 107</text>
                <text x="216" y="106" fill="#1A2230" fontSize="13" fontWeight="bold">开盘 105</text>
                <text x="216" y="337" fill="#1A2230" fontSize="13" fontWeight="bold">收盘 98</text>
                <text x="216" y="371" fill="#4A5568" fontSize="13">最低 97</text>
                <text x="76" y="450" fill="#8B97A8" fontSize="13">绿色 = 阴线：收低于开，卖方赢了</text>
            </svg>
        </Box>
    </Box>
    <Box style={{ height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40 }}>
        <Text style={{ fontSize: 14, color: '#8B97A8' }}>Brooks 价格行为学习 · 趋势卷</Text>
        <Text style={{ fontSize: 14, color: '#1E4FA8' }}>08 / 11</Text>
    </Box>
</Slide>
