<Slide style={{ padding: 0, background: '#FFFFFF' }}>
    <Box style={{ height: 80, background: '#0E3F8C', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40 }}>
        <Text style={{ fontSize: 30, color: '#FFFFFF', fontWeight: 'bold' }}>本讲学习目标</Text>
        <Text style={{ fontSize: 14, color: '#B9CCED' }}>引言 · 第 1 讲 · 零基础补课</Text>
    </Box>
    <Box style={{ flex: 1, padding: 28, flexDirection: 'column', gap: 18 }}>
        <Box style={{ flex: 1, flexDirection: 'row', gap: 18 }}>
            {[
                ['学完能做', '给出任意一根 K 线的四个数（开/收/高/低），你能说出它是什么颜色、实体从哪到哪、这段时间买方卖方谁赢了。', '#1E4FA8'],
                ['本讲重点', '四个数字各对应蜡烛的哪一段：实体是开和收，影线是最高最低。', '#1E4FA8'],
            ].map((c, i) => (
                <Box key={i} style={{ flex: 1, background: '#F7F9FC', border: '1px solid #E5E7EB', borderRadius: 10, padding: 24, justifyContent: 'center', gap: 12 }}>
                    <Box style={{ background: c[2], borderRadius: 6, paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, alignSelf: 'flex-start' }}>
                        <Text style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 'bold' }}>{c[0]}</Text>
                    </Box>
                    <Text style={{ fontSize: 19, color: '#1A2230', lineHeight: 1.6 }}>{c[1]}</Text>
                </Box>
            ))}
        </Box>
        <Box style={{ flex: 1, flexDirection: 'row', gap: 18 }}>
            {[
                ['本讲难点', '影线和实体的区别——"到过"和"站住"是两回事。价格冲出去又缩回来的那段，只留一根细线。', '#D9534F'],
                ['预计时间', '约 15 分钟：看一遍动画（8 步），答两道随堂检查题。允许说"不确定"，说清哪里不确定也给分。', '#1E4FA8'],
            ].map((c, i) => (
                <Box key={i} style={{ flex: 1, background: '#F7F9FC', border: '1px solid #E5E7EB', borderRadius: 10, padding: 24, justifyContent: 'center', gap: 12 }}>
                    <Box style={{ background: c[2], borderRadius: 6, paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, alignSelf: 'flex-start' }}>
                        <Text style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 'bold' }}>{c[0]}</Text>
                    </Box>
                    <Text style={{ fontSize: 19, color: '#1A2230', lineHeight: 1.6 }}>{c[1]}</Text>
                </Box>
            ))}
        </Box>
        <Text style={{ fontSize: 14, color: '#8B97A8' }}>先修知识：无。这是全课程第一节课，不设入门门槛。</Text>
    </Box>
    <Box style={{ height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40 }}>
        <Text style={{ fontSize: 14, color: '#8B97A8' }}>Brooks 价格行为学习 · 趋势卷</Text>
        <Text style={{ fontSize: 14, color: '#1E4FA8' }}>05 / 11</Text>
    </Box>
</Slide>
