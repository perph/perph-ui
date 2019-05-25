import * as React from 'react';
import Perph from 'assets/images/perph.png';
import PerphLight from 'assets/images/perph-light.png';
import { LogoWrapper, LogoLightWrapper } from './style';
export interface ILogoProps {
  expanded: boolean;
}

function Logo(props: ILogoProps) {
  return props.expanded ? <LogoWrapper src={Perph} /> : <LogoLightWrapper src={PerphLight} />;
}

export default Logo;
