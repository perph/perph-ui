import React, { useState } from 'react';
import { MenuWrapper } from './style';
export interface IMenuItemProps {
  title: string;
  selected: string;
  onClick: (k: string) => void;
}

const MenuItem: React.FC<IMenuItemProps> = props => {
  return <div>{props.title}</div>;
};

export interface IMenuProps {}

const Menu: React.FC<IMenuProps> = props => {
  return <MenuWrapper>{props.children}</MenuWrapper>;
};

export interface ISideNavBarProps {}

const SideNavBar: React.FC<ISideNavBarProps> = props => {
  const [selected, setSelected] = useState('');
  return (
    <Menu>
      <MenuItem
        key="ITEM1"
        selected={selected}
        onClick={k => setSelected(k)}
        title={'ITEM1'}
      />
      <MenuItem key="ITEM2" title={'ITEM2'} />
      <MenuItem key="ITEM2" title={'ITEM2'} />
    </Menu>
  );
};

export default SideNavBar;
