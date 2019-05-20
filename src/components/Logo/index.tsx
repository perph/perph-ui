import * as React from 'react';
import Perph from 'assets/images/perph.png'
import { LogoWrapper } from './style';
export interface ILogoProps {
}

function Logo (props: ILogoProps) {
    return (
        <LogoWrapper src={Perph} />
    );
}

export default Logo;