import React, { useState, useContext, useEffect } from 'react';
import { Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
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
  uri: string;
  expanded?: boolean;
}

const MenuItem: React.FC<IMenuItemProps> = props => {
  const selected =
    typeof props.selected !== 'undefined' ? props.selected : false;
  const expanded =
    typeof props.expanded !== 'undefined' ? props.expanded : true;
  const { theme } = useContext(ThemeContext);
  const title = props.title || '';
  return (
    <MenuItemWrapper
      expanded={expanded}
      theme={theme}
      selected={selected}
      onClick={props.onClick}
    >
      <MenuItemContent expanded={expanded}>
        <MenuItemIcon type={props.icon} />
        <MenuItemTitle expanded={expanded}>{title}</MenuItemTitle>
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
  onSelect: Function;
  selected?: string;
}

const Menu: React.FC<IMenuProps> = props => {
  const [selected, setSelected] = useState(props.selected || '');
  const handleSelect = (value: string) => {
    setSelected(value);
    if (props.onSelect) {
      props.onSelect(value);
    }
  };
  return (
    <MenuWrapper>
      {React.Children.map(props.children, (child: React.ReactElement<any>) => {
        return <Link to={child.props.uri}>
                {React.cloneElement(child, {
                  onClick: () => handleSelect(child.props.value),
                  selected: selected === child.props.value,
                  expanded: props.expanded,
                  title:
                    child.props.value
                      .toLowerCase()
                      .charAt(0)
                      .toUpperCase() + child.props.value.slice(1),
                  })
                }
              </Link>;
        })}
    </MenuWrapper>
  );
};

export interface ISideNavBarProps {
  onExpandChange?: (expanded: boolean) => void;
  width?: number;
  expanded?: boolean;
  windowWidth: any;
  sections: Array<any>;
  onSelect: Function;
  selected: string;
}

const SideNavBar: React.FC<ISideNavBarProps> = props => {
  const { theme } = useContext(ThemeContext);
  const windowWidth = props.windowWidth || 1000;
  const [expanded, setExpanded] = useState(true);
  const disableExpand = windowWidth < 600;
  const width = props.width ? `${expanded ? props.width : 70}px` : `100%`;
  const menuItems = props.sections.map((section, index) => (
    <MenuItem
      uri={section.uri}
      key={`${section.title}-index`}
      icon={section.icon}
      value={section.title}
    />
  ));
  useEffect(() => {
    if (props.onExpandChange) {
      props.onExpandChange(expanded);
    }
    if (windowWidth < 600 && windowWidth > 1) {
      setExpanded(false);
    }
  }, [windowWidth, props, expanded]);
  return (
    <SideNavBarWrapper width={width} theme={theme}>
      <MenuLogoWrapper>
        <Logo expanded={expanded} />
      </MenuLogoWrapper>
      <MenuThemeWrapper>
        <ThemeToggle />
      </MenuThemeWrapper>
      <ExpandButtonWrapper>
        <ExpandButton
          expanded={expanded}
          setExpanded={disableExpand ? () => {} : setExpanded}
        />
      </ExpandButtonWrapper>
      <Menu
        expanded={expanded}
        selected={props.selected}
        onSelect={props.onSelect}
      >
        {menuItems}
      </Menu>
    </SideNavBarWrapper>
  );
};

export default SideNavBar;
