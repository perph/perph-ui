// import styled from 'styled-components';
import styled, { ITheme } from 'theme';
import { Icon } from 'antd';

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
  width: any;
}

export const SideNavBarWrapper = styled.div<ISideNavWrapper>`
  border-radius: 0 50px 50px 0;
  width: ${props => props.width};
  -webkit-transition: width 300ms ease-in-out; /* For Safari 3.1 to 6.0 */
  transition: width 300ms ease-in-out;
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
  margin: 3px 0 3px 5px;
  padding: 3px 0 3px 0;
  border-radius: 30px 0 0 30px;
  display: grid;
  grid-template-areas: 'content indicator';
  grid-template-columns: ${props => (props.expanded ? 5 : 3)}fr 1fr;
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
  margin-top: -33px;
  grid-template-rows: 30px 36px 30px;
  grid-template-areas:
    'top'
    'center'
    'bottom';
`;
export const MenuItemIndicatorCenter = styled.div<IIndicator>`
  display: ${props => (props.selected ? `block` : `none`)};
  background: ${props => props.theme.navbarSelectedRow};
  width: 110%;
  height: 98px;
  grid-area: center;
  margin-top: -30px;
  z-index: 0;
`;
export const MenuItemIndicatorTop = styled.div<IIndicator>`
  grid-area: top;
  display: ${props => (props.selected ? `block` : `none`)};
  background: ${props => props.theme.navbarBackground};
  width: 110%;
  height: 110%;
  margin-left: -10%;
  margin-top: -3px;
  border-radius: 0 0 30px 0;
  z-index: 1;
  overflow: hidden;
`;
export const MenuItemIndicatorBottom = styled.div<IIndicator>`
  grid-area: bottom;
  display: ${props => (props.selected ? `block` : `none`)};
  background: ${props => props.theme.navbarBackground};
  width: 110%;
  height: 110%;
  margin-left: -10%;
  border-radius: 0 30px 0 0;
  z-index: 1;
  overflow: hidden;
`;

interface IMenuItemContent {
  expanded: boolean;
}

export const MenuItemContent = styled.div<IMenuItemContent>`
  grid-area: content;
  width: 100%;
  text-align: left;
  margin-left: ${props => (props.expanded ? 14 : 5)}px;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  overflow: hidden;
`;

export const MenuItemTitle = styled.div<IMenuItemContent>`
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  display: ${props => (props.expanded ? `flex` : `none`)};
  width: ${props => (props.expanded ? `100%` : `0px`)};
  animation-delay: 0.2s;
  transition: width 2000ms;
  margin-left: 10px;
  font-size: 15px;
  font-family: 'Prompt', sans-serif;
  overflow: hidden;
`;

export const MenuItemIcon = styled(Icon)`
  width: 30px;
  font-size: 30px;
`;
