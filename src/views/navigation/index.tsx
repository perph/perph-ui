import React, { useState } from 'react';
import useResizeObserver from 'hooks/useResizerObserver';
import SideNavBar from 'components/SideNavBar';
import TopNav from 'components/TopNav';
import { NavigationWrapper, SideNavWrapper, TopNavWrapper } from './style';
interface INavigationProps {}

function Navigation(props: INavigationProps) {
  const [expanded, setExpanded] = useState(true);
  const [ref, width] = useResizeObserver();
  return (
    <NavigationWrapper ref={ref} expanded={expanded}>
      <TopNavWrapper>
        <TopNav />
      </TopNavWrapper>
      <SideNavWrapper>
        <SideNavBar
          windowWidth={width}
          expanded={expanded}
          onExpandChange={value => setExpanded(value)}
        />
      </SideNavWrapper>
    </NavigationWrapper>
  );
}

export default Navigation;
