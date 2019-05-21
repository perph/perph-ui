import React, { useState } from 'react';
import { MenuWrapper, MenuItemWrapper, MenuItemTitle, MenuItemIcon } from './style';
export interface IMenuItemProps {
  value: string;
  title?: string;
  onClick?: () => void;
  selected: boolean;
  icon: string;
}

const MenuItem: React.FC<IMenuItemProps> = props => {
  return (
    <MenuItemWrapper selected={props.selected} onClick={props.onClick}>
      <MenuItemTitle>{props.title}</MenuItemTitle>
      <MenuItemIcon>{props.icon}</MenuItemIcon>
    </MenuItemWrapper>
  );
};

export interface IMenuProps {
  children: any;
}

const Menu: React.FC<IMenuProps> = props => {
  const [selected, setSelected] = useState('');
  return (
    <MenuWrapper>
      {React.Children.map(props.children, (child: React.ReactElement<any>) => {
        return React.cloneElement(child, {
          onClick: () => setSelected(child.props.value),
          selected: selected === child.props.value,
          title:
            child.props.value
              .toLowerCase()
              .charAt(0)
              .toUpperCase() + child.props.value.slice(1),
        });
      })}
    </MenuWrapper>
  );
};

export interface ISideNavBarProps {}

const SideNavBar: React.FC<ISideNavBarProps> = props => {
  return (
    <Menu>
      <MenuItem value={'Overview'} />
      <MenuItem value={'Management'} />
      <MenuItem value={'Dashboards'} />
      <MenuItem value={'Realtime'} />
    </Menu>
  );
};

export default SideNavBar;
