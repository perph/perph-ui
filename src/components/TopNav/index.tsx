import * as React from 'react';
import Logo from 'components/Logo';
import { TopNavWrapper, LogoWrapper } from './style';
export interface ITopNavProps {
}

function TopNav (props: ITopNavProps) {
    return (
      <TopNavWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </TopNavWrapper>
    );
}

export default TopNav
