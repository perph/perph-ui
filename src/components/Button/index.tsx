import React, { useState } from 'react';
import { Icon } from 'antd';

import { ButtonWrapper } from './style';

interface IButtonProps {
  onClick?: () => void;
  type: string;
  color?: string;
  hoverColor?: string;
  fontSize?: string;
  gridarea?: string;
}

const Button: React.FunctionComponent<IButtonProps> = props => {
  const [hovered, setHovered] = useState(false);
  const color = props.color || 'black';
  const type = props.type;
  const hoverColor = props.hoverColor || color;
  const fontSize = props.fontSize || '16px';
  const style = hovered ? { color: hoverColor, fontSize } : { color, fontSize };
  return (
    <ButtonWrapper
      gridarea={props.gridarea}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon type={type} style={style} theme={hovered ? 'filled' : 'outlined'} />
    </ButtonWrapper>
  );
};

export default Button;
