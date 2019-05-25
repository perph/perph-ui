import styled from 'theme';
interface INavigationWrapper {
  expanded: boolean;
  ref: any;
}
export const NavigationWrapper = styled.div<INavigationWrapper>`
  display: grid;
  height: 100%;
  background: ${props => props.theme.background};
  grid-template-columns: ${props => (props.expanded ? 200 : 70)}px 1fr;

  grid-template-rows: 100px 1fr;
  grid-template-areas:
    'sidenav top-nav'
    'sidenav content';
`;

export const SideNavWrapper = styled.div`
  grid-area: sidenav;
  -webkit-transition: all 2s ease-in-out; /* For Safari 3.1 to 6.0 */
  transition: all 2s ease-in-out;
`;

export const TopNavWrapper = styled.div`
  grid-area: top-nav;
`;
