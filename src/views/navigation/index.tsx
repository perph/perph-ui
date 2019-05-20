import * as React from 'react';
import SideNav from 'components/SideNav';
import TopNav from 'components/TopNav';

import { NavigationWrapper, SideNavWrapper, TopNavWrapper } from './style';
export interface INavigationProps {}

function Navigation(props: INavigationProps) {
  return (
    <NavigationWrapper>
      <TopNavWrapper>
        <TopNav />
      </TopNavWrapper>
      <SideNavWrapper>
        <SideNav />
      </SideNavWrapper>
    </NavigationWrapper>
  );
}

export default Navigation;
