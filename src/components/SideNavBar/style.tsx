// import styled from 'styled-components';
import styled, { ITheme } from 'theme';

export const MenuWrapper = styled.div`
  width: 100%;
  grid-area: menu;
`;

export const MenuThemeWrapper = styled.div`
  grid-area: theme;
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const MenuLogoWrapper = styled.div`
  display: flex;
  grid-area: logo;
  width: 100%;
  justify-content: center;
`;
interface ISideNavWrapper {
  width: number;
}
export const SideNavBarWrapper = styled.div<ISideNavWrapper>`
  border-radius: 0 50px 0 0;
  width: ${props => props.width}px;
  height: 100%;
  padding-top: 20px;
  background: ${props => props.theme.navbarBackground};
  display: grid;
  color: ${props => props.theme.primaryColor};
  grid-template-areas:
    'logo'
    'theme'
    'expand'
    'menu'
    'padding';
  grid-template-rows: 100px 40px 60px 1fr 50px;
`;

export const ExpandButtonWrapper = styled.div`
  grid-area: expand;
  display: flex;
  width: 100%;
  justify-content: center;
`;

interface IMenuItemWrapper {
  selected: boolean;
  expanded: boolean;
  theme: ITheme;
}
export const MenuItemWrapper = styled.div<IMenuItemWrapper>`
  background: ${props =>
    props.selected
      ? props.theme.navbarSelectedRow
      : props.theme.navbarBackground};
  color: ${props =>
    props.selected
      ? props.theme.colorNavbarSelected
      : props.theme.colorNavbarUnselected};
  margin-left: 5px;
  border-radius: 30px 0 0 30px;
  display: grid;
  grid-template-areas: 'content indicator';
  grid-template-columns: ${props => (props.expanded ? 5 : 2)}fr 1fr;
`;

interface IIndicator {
  selected: boolean;
}
export const MenuItemIndicator = styled.div<IIndicator>`
  grid-area: indicator;
  display: grid;
  width: 100%;
  height: 50px;
  color: blue;
  margin-top: -30px;
  grid-template-rows: 30px 30px 30px;
  grid-template-areas:
    'top'
    'center'
    'bottom';
`;
export const MenuItemIndicatorCenter = styled.div<IIndicator>`
  display: ${props => (props.selected ? `block` : `none`)};
  background: ${props => props.theme.navbarSelectedRow};
  width: 110%;
  height: 85px;
  grid-area: center;
  margin-top: -30px;
  z-index: 0;
`;
export const MenuItemIndicatorTop = styled.div<IIndicator>`
  grid-area: top;
  display: ${props => (props.selected ? `block` : `none`)};
  background: ${props => props.theme.navbarBackground};
  width: 105%;
  height: 110%;
  margin-left: -5%;
  margin-top: -3px;
  border-radius: 0 0 30px 0;
  z-index: 1;
`;
export const MenuItemIndicatorBottom = styled.div<IIndicator>`
  grid-area: bottom;
  display: ${props => (props.selected ? `block` : `none`)};
  background: ${props => props.theme.navbarBackground};
  width: 105%;
  height: 110%;
  margin-left: -5%;
  margin-top: -5px;
  border-radius: 0 30px 0 0;
  z-index: 1;
`;

export const MenuItemContent = styled.div`
  grid-area: content;
  width: 100%;
  text-align: left;
  margin-left: 7px;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 25px;
`;

export const MenuItemTitle = styled.div`
  width: 100%;
  margin-left: 10px;
  font-size: 10px;
  font-family: 'Prompt', sans-serif;
`;

export const MenuItemIcon = styled.div`
  width: 20px;
`;
