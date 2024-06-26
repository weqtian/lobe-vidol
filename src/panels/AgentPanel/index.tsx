import React from 'react';

import PanelContainer from '@/panels/PanelContainer';

import Agent from './Agent';
import { useStyles } from './style';

interface ControlPanelProps {
  className?: string;
  style?: React.CSSProperties;
}

const ControlPanel = (props: ControlPanelProps) => {
  const { style, className } = props;
  const { styles } = useStyles();

  return (
    <PanelContainer className={className} panelKey="agent" style={style} title="我的角色">
      <div className={styles.content}>
        <Agent />
      </div>
    </PanelContainer>
  );
};

export default ControlPanel;
