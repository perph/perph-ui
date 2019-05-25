import React, { useState } from 'react';
import { Motion, spring } from 'react-motion';
import useResizeObserver from 'hooks/useResizerObserver';
import SideNavBar from 'components/SideNavBar';
import TopNav from 'components/TopNav';
import {
  NavigationWrapper,
  ViewWrapper,
  SideNavWrapper,
  TopNavWrapper,
} from './style';
interface INavigationProps {}

function Navigation(props: INavigationProps) {
  const [expanded, setExpanded] = useState(true);
  const [ref, width] = useResizeObserver();
  return (
    <Motion style={{ x: spring(expanded ? 200 : 70) }}>
      {({ x }) => (
        <NavigationWrapper width={x} ref={ref} expanded={expanded}>
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
          <ViewWrapper />
        </NavigationWrapper>
      )}
    </Motion>
  );
}

export default Navigation;
