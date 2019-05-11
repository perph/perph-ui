import React, { useContext, useState } from 'react';
import { Menu, Icon, Switch, Button } from 'antd';
import ThemeToggle from 'components/ThemeToggle';
import { ThemeContext } from 'theme';
import { SideNavWrapper } from './style';
interface IExpandButton {
  expand: boolean;
  setExpand: Function;
}

const ExpandButton: React.FC<IExpandButton> = props => {
  return (
    <Button
      type="primary"
      onClick={() => props.setExpand(!props.expand)}
      style={{ width: 50 }}
    >
      <Icon type={props.expand ? 'menu-unfold' : 'menu-fold'} />
    </Button>
  );
};

const ThemeWidget: React.FC = () => {
  return <ThemeToggle />;
};
interface ISideNav {}
const SideNav: React.FC<ISideNav> = () => {
  const [expand, setExpand] = useState(false);
  const [currentMenu, setCurrentMenu] = useState('OVERVIEW');
  const theme = useContext(ThemeContext);
  return (
    <SideNavWrapper>
      <Menu
        className="menu"
        inlineCollapsed={expand}
        theme={theme.mode}
        onClick={e => setCurrentMenu(e.key)}
        defaultOpenKeys={['sub1']}
        selectedKeys={[currentMenu]}
        mode="inline"
      >
        <Menu.Item key="OVERVIEW">
          <Icon type="pie-chart" />
          <span>Overview</span>
        </Menu.Item>
        <Menu.Item key="MENU2">
          <Icon type="desktop" />
          <span>item 2n</span>
        </Menu.Item>
        <Menu.Item key="MENU3">
          <Icon type="inbox" />
          <span>item 3</span>
        </Menu.Item>
        <Menu.Item key="MENU4">
          <Icon type="warning" />
          <span>item 4</span>
        </Menu.Item>
        <Menu.Item key="MENU5">
          <Icon type="line-chart" />
          <span>item 5</span>
        </Menu.Item>
      </Menu>
    </SideNavWrapper>
  );
};

export default SideNav;
