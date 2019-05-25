import React, { useState, useContext } from 'react';
import { Icon, Button } from 'antd';
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
  ExpandButtonWrapper,
} from './style';
export interface IMenuItemProps {
  value: string;
  title?: string;
  onClick?: () => void;
  selected?: boolean;
  icon: string;
  expanded: boolean;
}

const MenuItem: React.FC<IMenuItemProps> = props => {
  const selected = props.selected || false;
  const { theme } = useContext(ThemeContext);
  const title = props.expanded ? (
    <MenuItemTitle>{props.title}</MenuItemTitle>
  ) : null;
  return (
    <MenuItemWrapper
      expanded={props.expanded}
      theme={theme}
      selected={selected}
      onClick={props.onClick}
    >
      <MenuItemContent>
        <MenuItemIcon>
          <Icon style={{ fontSize: 20 }} type={props.icon} />
        </MenuItemIcon>
        {title}
      </MenuItemContent>
      <MenuItemIndicator theme={theme} selected={selected}>
        <MenuItemIndicatorTop theme={theme} selected={selected} />
        <MenuItemIndicatorCenter theme={theme} selected={selected} />
        <MenuItemIndicatorBottom theme={theme} selected={selected} />
      </MenuItemIndicator>
    </MenuItemWrapper>
  );
};
interface IExpandButton {
  expanded: boolean;
  setExpanded: Function;
}
const ExpandButton: React.FC<IExpandButton> = props => {
  return (
    <Button
      type="primary"
      onClick={() => props.setExpanded(!props.expanded)}
      style={{
        width: 25,
        height: 28,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Icon
        style={{ fontSize: 25 }}
        type={props.expanded ? 'menu-unfold' : 'menu-fold'}
      />
    </Button>
  );
};

export interface IMenuProps {
  children: any;
  expanded: boolean;
}

const Menu: React.FC<IMenuProps> = props => {
  const [selected, setSelected] = useState('');
  return (
    <MenuWrapper>
      {React.Children.map(props.children, (child: React.ReactElement<any>) => {
        return React.cloneElement(child, {
          onClick: () => setSelected(child.props.value),
          selected: selected === child.props.value,
          expanded: props.expanded,
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
  const [expanded, setExpanded] = useState(false);
  return (
    <SideNavBarWrapper width={expanded ? 150 : 70} theme={theme}>
      <MenuLogoWrapper>
        <Logo expanded={expanded} />
      </MenuLogoWrapper>
      <MenuThemeWrapper>
        <ThemeToggle />
      </MenuThemeWrapper>
      <ExpandButtonWrapper>
        <ExpandButton expanded={expanded} setExpanded={setExpanded} />
      </ExpandButtonWrapper>
      <Menu expanded={expanded}>
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
