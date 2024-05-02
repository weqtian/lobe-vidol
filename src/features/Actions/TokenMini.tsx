import { Tooltip, Typography } from 'antd';
import { isEqual } from 'lodash-es';

import { OPENAI_MODEL_LIST } from '@/constants/openai';
import { useCalculateToken } from '@/hooks/useCalculateToken';
import { configSelectors, useConfigStore } from '@/store/config';

const TokenMini = () => {
  const config = useConfigStore((s) => configSelectors.currentOpenAIConfig(s), isEqual);
  const usedTokens = useCalculateToken();
  const maxValue = OPENAI_MODEL_LIST.find((item) => item.name === config?.model)?.maxToken || 4096;

  return (
    <Tooltip title="上下文消耗 Token 数量计算，数字代表 {总计使用} / {总计可用}]">
      <Typography.Text type={'secondary'}>
        {usedTokens} / {maxValue}
      </Typography.Text>
    </Tooltip>
  );
};

export default TokenMini;
