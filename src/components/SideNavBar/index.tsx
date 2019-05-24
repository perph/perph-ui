import React, { useState, useContext } from 'react';
import { Icon } from 'antd';
import Logo from 'components/Logo';
import ThemeToggle from 'components/ThemeToggle';
import { ThemeContext } from 'theme';
import {
  SideNavBarWrapper,
  MenuWrapper,
  MenuItemWrapper,
  MenuItemTitle,
  MenuItemIcon,
  MenuItemContent,
  MenuItemIndicator,
  MenuItemIndicatorCenter,
  MenuItemIndicatorTop,
  MenuItemIndicatorBottom,
  MenuLogoWrapper,
  MenuThemeWrapper,
} from './style';
export interface IMenuItemProps {
  value: string;
  title?: string;
  onClick?: () => void;
  selected?: boolean;
  icon: string;
}

const MenuItem: React.FC<IMenuItemProps> = props => {
  const selected = props.selected || false;
  const { theme } = useContext(ThemeContext);
  return (
    <MenuItemWrapper theme={theme} selected={selected} onClick={props.onClick}>
      <MenuItemContent>
        <MenuItemIcon>
          <Icon type={props.icon} />
        </MenuItemIcon>
        <MenuItemTitle>{props.title}</MenuItemTitle>
      </MenuItemContent>
      <MenuItemIndicator theme={theme} selected={selected}>
        <MenuItemIndicatorTop theme={theme} selected={selected} />
        <MenuItemIndicatorCenter theme={theme} selected={selected} />
        <MenuItemIndicatorBottom theme={theme} selected={selected} />
      </MenuItemIndicator>
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
  const { theme } = useContext(ThemeContext);
  return (
    <SideNavBarWrapper theme={theme}>
      <MenuLogoWrapper>
        <Logo />
      </MenuLogoWrapper>
      <MenuThemeWrapper>
        <ThemeToggle />
      </MenuThemeWrapper>
      <Menu>
        <MenuItem icon={'shop'} value={'Overview'} />
        <MenuItem icon={'control'} value={'Management'} />
        <MenuItem icon={'dashboard'} value={'Dashboards'} />
        <MenuItem icon={'alert'} value={'Alerts'} />
        <MenuItem icon={'experiment'} value={'Realtime'} />
      </Menu>
    </SideNavBarWrapper>
  );
};

export default SideNavBar;
