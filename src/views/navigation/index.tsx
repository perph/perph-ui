import React, { useState } from 'react';
import { Motion, spring } from 'react-motion';
import { matchPath } from 'react-router';
import { withRouter, Route, Redirect } from 'react-router-dom';
import useResizeObserver from 'hooks/useResizerObserver';
import SideNavBar from 'components/SideNavBar';
import TopNav from 'components/TopNav';
import Overview from 'views/overview';
import Management from 'views/management';
import Dashboards from 'views/dashboards';
import Alerts from 'views/alerts';
import RealTime from 'views/realtime';
import { sections } from 'config';
import { defaultRoute, navItems } from 'routes';
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
  const { location } = props;
  const activeItem =
    navItems.find(item => {
      let isRoute = matchPath(location.pathname, {
        path: item.to,
        exact: true,
        strict: false,
      })
        ? true
        : false;
      if (!isRoute && item.pathsActive) {
        isRoute =
          item.pathsActive.filter(path => path.test(location.pathname)).length >
          0;
      }
      return isRoute;
    }) || sections[0];
  const [selected, setSelected] = useState(activeItem.title);
  return (
    <Motion style={{ x: spring(expanded ? 200 : 70) }}>
      {({ x }) => (
        <NavigationWrapper width={x} ref={ref} expanded={expanded}>
          <TopNavWrapper>
            <TopNav />
          </TopNavWrapper>
          <SideNavWrapper>
            <SideNavBar
              onSelect={setSelected}
              selected={selected}
              sections={sections}
              windowWidth={width}
              expanded={expanded}
              onExpandChange={value => setExpanded(value)}
            />
          </SideNavWrapper>
          <ViewWrapper>
            <Route path="/overview" component={Overview} />
            <Route path="/management" component={Management} />
            <Route path="/dashboards" component={Dashboards} />
            <Route path="/alerts" component={Alerts} />
            <Route path="/realtime" component={RealTime} />
            <Route
              exact
              path="/"
              render={() => <Redirect to={defaultRoute} />}
            />
          </ViewWrapper>
        </NavigationWrapper>
      )}
    </Motion>
  );
}

export default withRouter(Navigation);
