import styled from 'theme';

export const transitionStyles: { [key: string]: { [key: string]: number } } = {
  entering: { width: 70 },
  entered: { width: 200 },
  exiting: { width: 200 },
  exited: { width: 70 },
};

interface INavigationWrapper {
  expanded: boolean;
  ref: any;
  width: any;
}
export const NavigationWrapper = styled.div<INavigationWrapper>`
  display: grid;
  height: 100%;
  background: ${props => props.theme.background};
  grid-template-columns: ${props => props.width}px 1fr;

  grid-template-rows: 100px 1fr;
  grid-template-areas:
    'sidenav top-nav'
    'sidenav content';
`;

export const SideNavWrapper = styled.div`
  grid-area: sidenav;
  overflow: hidden;
  -webkit-transition: all 2s ease-in-out; /* For Safari 3.1 to 6.0 */
  transition: all 2s ease-in-out;
`;

export const TopNavWrapper = styled.div`
  grid-area: top-nav;
`;
export const ViewWrapper = styled.div`
  grid-area: content;
`;
