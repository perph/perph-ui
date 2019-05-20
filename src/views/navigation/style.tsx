import styled from 'theme';

export const NavigationWrapper = styled.div`
  display: grid;
  height: 100%;
  background: ${props => props.theme.backgroundColor};
  grid-template-columns: 140px 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas:
    'top-nav top-nav'
    'sidenav content';
`;

export const SideNavWrapper = styled.div`
  grid-area: sidenav;
`;

export const TopNavWrapper = styled.div`
  grid-area: top-nav;
`;