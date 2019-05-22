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
  margin-left: 25px;
  border-radius: 20px 0 0 20px;
  display: grid;
  grid-template-areas: 'content indicator';
  grid-template-columns: 100px 1fr;
  grid-template-rows: repeat(auto-fill, minmax(20px,1fr));
`;
export const MenuItemContent = styled.div`
  grid-area: content;
  width: 100px;
  text-align: left;
  height: 20px;
  
  margin-left: 10px;
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
  background: white;
  width: 103%;
  height: 60px;
  grid-area: center;
  margin-top: -20px;
  z-index: 0
`;
export const MenuItemIndicatorTop = styled.div<IIndicator>`
  grid-area: top;
  display: ${props => (props.selected ? `block` : `none`)};
  background: #3f3838;
  width: 102%;
  height: 22px;
  margin-left: -2%;
  margin-top: -2px;
  border-radius: 0 0 20px 0;
  z-index: 1;
`;
export const MenuItemIndicatorBottom = styled.div<IIndicator>`
  grid-area: bottom;
  display: ${props => (props.selected ? `block` : `none`)};
  background: #3f3838;
  width: 102%;
  height: 25px;
  margin-left: -2%;
  margin-bottom: 20px;
  border-radius: 0 20px 0 0;
  z-index: 1;
`;

export const MenuItemTitle = styled.div``;

export const MenuItemIcon = styled.div``;
