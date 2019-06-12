import React, { useState } from 'react';
import { Icon } from 'antd';

import { ButtonWrapper } from './style';

interface IButtonProps {
  onClick?: () => void;
  type: string;
  style?: any;
  color?: string;
  hoverColor?: string;
  fontSize?: number;
  gridarea?: string;
  hoveredEnabled?: undefined | boolean | string;
}

const Button: React.FunctionComponent<IButtonProps> = props => {
  const [hovered, setHovered] = useState(false);
  const color = props.color || 'black';
  const type = props.type;
  const { hoveredEnabled } = props;
  const hoverColor = props.hoverColor || color;
  const fontSize = props.fontSize || 16;
  const style = hovered
    ? { ...props.style, color: hoverColor, fontSize }
    : { ...props.style, color, fontSize };
  return (
    <ButtonWrapper
      gridarea={props.gridarea}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon
        type={type}
        style={style}
        theme={hovered && hoveredEnabled ? 'filled' : 'outlined'}
      />
    </ButtonWrapper>
  );
};

export default Button;
