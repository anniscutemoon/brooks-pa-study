<Slide style={{ padding: 0, background: '#FFFFFF' }}>
    <Box style={{ height: 80, background: '#0E3F8C', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40 }}>
        <Text style={{ fontSize: 30, color: '#FFFFFF', fontWeight: 'bold' }}>随堂检查（满分 100）</Text>
        <Text style={{ fontSize: 14, color: '#B9CCED' }}>EX-L01 · 评分标准作答前已公布</Text>
    </Box>
    <Box style={{ flex: 1, padding: 26, flexDirection: 'column', gap: 18 }}>
        <Box style={{ flex: 1.25, background: '#F7F9FC', border: '1px solid #E5E7EB', borderRadius: 10, padding: 24, flexDirection: 'row', gap: 24 }}>
            <Box style={{ width: 200, justifyContent: 'center', gap: 10 }}>
                <Box style={{ background: '#1E4FA8', borderRadius: 6, paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, alignSelf: 'flex-start' }}>
                    <Text style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 'bold' }}>第 1 题 · 60 分</Text>
                </Box>
                <Text style={{ fontSize: 26, color: '#1A2230', fontWeight: 'bold', lineHeight: 1.5 }}>开 2050<br/>收 2044<br/>高 2053<br/>低 2041</Text>
            </Box>
            <Box style={{ flex: 1, justifyContent: 'center', gap: 12 }}>
                {['这根 K 线是阳线还是阴线？', '实体从哪个数到哪个数？', '上影线到哪个数？下影线到哪个数？', '这 5 分钟买方卖方谁赢了？说理由。'].map((q, i) => (
                    <Box key={i} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                        <Box style={{ width: 26, height: 26, background: '#E8EFF8', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, color: '#1E4FA8', fontWeight: 'bold' }}>{['①', '②', '③', '④'][i]}</Text>
                        </Box>
                        <Text style={{ fontSize: 18, color: '#1A2230' }}>{q}</Text>
                    </Box>
                ))}
            </Box>
        </Box>
        <Box style={{ flex: 1, background: '#F0F5FC', borderRadius: 10, padding: 24, flexDirection: 'row', gap: 24 }}>
            <Box style={{ width: 200, justifyContent: 'center' }}>
                <Box style={{ background: '#1E4FA8', borderRadius: 6, paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, alignSelf: 'flex-start' }}>
                    <Text style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 'bold' }}>第 2 题 · 40 分</Text>
                </Box>
            </Box>
            <Box style={{ flex: 1, justifyContent: 'center', gap: 10 }}>
                <Text style={{ fontSize: 20, color: '#1A2230', lineHeight: 1.55 }}>不看任何资料，用你自己的话，一句话说清：<span style={{ fontWeight: 'bold', color: '#0E3F8C' }}>影线说明什么？</span></Text>
                <Text style={{ fontSize: 14, color: '#4A5568', lineHeight: 1.6 }}>允许答"不确定"，说清哪里不确定也给分。参考答案单独存放在 EX-L01-answers.md，作答前不看。</Text>
            </Box>
        </Box>
    </Box>
    <Box style={{ height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40 }}>
        <Text style={{ fontSize: 14, color: '#8B97A8' }}>Brooks 价格行为学习 · 趋势卷</Text>
        <Text style={{ fontSize: 14, color: '#1E4FA8' }}>09 / 11</Text>
    </Box>
</Slide>
