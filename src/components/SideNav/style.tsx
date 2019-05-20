import styled from 'theme';
interface ISideNavProps {
  expand: boolean;
}
export const SideNavWrapper = styled.div<ISideNavProps>`
  max-width: ${props => (props.expand ? 140 : 80)}px;
  grid-template-areas:
    'theme'
    'expander'
    'menu';
  grid-template-rows: 50px 50px 1fr;
`;

export const MenuWrapper = styled.div`
  grid-area: theme;
  max-width: 140px;
`;

export const ThemeWidgetWrapper = styled.div`
  grid-area: expander;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 50px;
  max-width: 140px;
`;

export const ExpandButtonWrapper = styled.div`
  grid-area: menu;
  justify-content: center;
  display: flex;
  max-width: 140px;
  height: 50px;
`;
