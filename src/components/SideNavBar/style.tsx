import styled from 'styled-components';

export const MenuWrapper = styled.div``;
interface IMenuItemWrapper {
  selected: boolean;
}
export const MenuItemWrapper = styled.div<IMenuItemWrapper>`
  background: ${props => (props.selected ? `gray` : `white`)};
  display: flex;
  vertical-align: middle;
  justify-content: center;
`;
export const MenuItemTitle = styled.div``;

export const MenuItemIcon = styled.div``;
