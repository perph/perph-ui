import styled from 'styled-components';

export const MenuWrapper = styled.div`
  width: 100%;
`;
export const SideNavBarWrapper = styled.div`
  width: 200px;
  height: 500px;
  background: #403838;
`;
interface IMenuItemWrapper {
  selected: boolean;
}
export const MenuItemWrapper = styled.div<IMenuItemWrapper>`
  background: ${props => (props.selected ? `white` : `#403838`)};
  color: ${props => (props.selected ? `black` : `white`)};
  display: flex;
  margin-left: 25px;
  display: grid;
  grid-template-areas:
    'empty indicator'
    'content indicator'
    'empty indicator';
  grid-template-columns: 100px 1fr;
`;
export const MenuItemContent = styled.div`
  grid-area: content;
  width: 100px;
  text-align: left;
  height: 20px;
`;

interface IIndicator {
  selected: boolean;
}
export const MenuItemIndicator = styled.div<IIndicator>`
  grid-area: indicator;
  display: grid;
  width: 100%;
  margin-left: 100px;
  margin-top: -20px;
  grid-template-rows: 20px 20px 20px;
  grid-template-areas:
    'top'
    'center'
    'bottom';
`;
export const MenuItemIndicatorCenter = styled.div<IIndicator>`
  display: ${props => (props.selected ? `block` : `none`)};
  background: white;
  width: 100%;
  height: 20px;
  margin-left: 20px;
  grid-area: center;
`;
export const MenuItemIndicatorTop = styled.div<IIndicator>`
  grid-area: top;
  display: ${props => (props.selected ? `block` : `none`)};
  background: red;
  width: 100%;
  height: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  border-radius: 0 0 20px 0;
`;
export const MenuItemIndicatorBottom = styled.div<IIndicator>`
  grid-area: bottom;
  display: ${props => (props.selected ? `block` : `none`)};
  background: red;
  width: 100%;
  height: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  border-radius: 0 20px 0 0;
`;

export const MenuItemTitle = styled.div``;

export const MenuItemIcon = styled.div``;
