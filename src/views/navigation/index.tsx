import React, { useState } from 'react';
import { Motion, spring } from 'react-motion';
import { withRouter } from 'react-router-dom';
import useResizeObserver from 'hooks/useResizerObserver';
import SideNavBar from 'components/SideNavBar';
import TopNav from 'components/TopNav';
import { sections } from 'config';
import {
  NavigationWrapper,
  ViewWrapper,
  SideNavWrapper,
  TopNavWrapper,
} from './style';
interface INavigationProps {
  location: any;
}

function Navigation(props: INavigationProps) {
  console.log(props.location);
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
              sections={sections}
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

export default withRouter(Navigation);
