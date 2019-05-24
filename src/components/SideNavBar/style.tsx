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
export const SideNavBarWrapper = styled.div`
  border-radius: 0 50px 0 0;
  width: 150px;
  height: 100%;
  background: ${props => props.theme.navbarBackground};
  display: grid;
  color: ${props => props.theme.primaryColor};
  grid-template-areas:
    'logo'
    'theme'
    'menu';
  grid-template-rows: 100px 40px 1fr;
`;
interface IMenuItemWrapper {
  selected: boolean;
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
  border-radius: 20px 0 0 20px;
  display: grid;
  grid-template-areas: 'content indicator';
  grid-template-columns: 120px 1fr;
  grid-template-rows: repeat(auto-fill, minmax(20px, 1fr));
`;

interface IIndicator {
  selected: boolean;
}
export const MenuItemIndicator = styled.div<IIndicator>`
  grid-area: indicator;
  display: grid;
  width: 100%;
  height: 40px;
  color: blue;
  margin-top: -20px;
  grid-template-rows: 20px 20px 20px;
  grid-template-areas:
    'top'
    'center'
    'bottom';
`;
export const MenuItemIndicatorCenter = styled.div<IIndicator>`
  display: ${props => (props.selected ? `block` : `none`)};
  background: ${props => props.theme.navbarSelectedRow};
  width: 110%;
  height: 60px;
  grid-area: center;
  margin-top: -20px;
  z-index: 0;
`;
export const MenuItemIndicatorTop = styled.div<IIndicator>`
  grid-area: top;
  display: ${props => (props.selected ? `block` : `none`)};
  background: ${props => props.theme.navbarBackground};
  width: 110%;
  height: 22px;
  margin-left: -10%;
  margin-top: -2px;
  border-radius: 0 0 20px 0;
  z-index: 1;
`;
export const MenuItemIndicatorBottom = styled.div<IIndicator>`
  grid-area: bottom;
  display: ${props => (props.selected ? `block` : `none`)};
  background: ${props => props.theme.navbarBackground};
  width: 110%;
  height: 25px;
  margin-left: -10%;
  margin-bottom: 20px;
  border-radius: 0 20px 0 0;
  z-index: 1;
`;

export const MenuItemContent = styled.div`
  grid-area: content;
  width: 100px;
  text-align: left;
  height: 20px;
  display: flex;
  margin-left: 10px;
`;

export const MenuItemTitle = styled.div`
  width: 100px;
  margin-left: 10px;
  font-size: 14px;
  font-family: 'Prompt', sans-serif;
`;

export const MenuItemIcon = styled.div`
  width: 20px;
`;
