import React from 'react';
import { Menu, Icon, Switch, Button } from 'antd';
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
  return <div>theme widget</div>;
};
interface ISideNav {}
const SideNav: React.FC<ISideNav> = () => {
  const [expand, setExpand] = React.useState(true);
  return (
    <Menu
      className="menu"
      inlineCollapsed={expand}
      // theme={this.state.theme}
      // onClick={this.handleClick}
      defaultOpenKeys={['sub1']}
      // selectedKeys={[this.state.current]}
      mode="inline"
    >
      <Menu.Item key="SUMMARY">
        <Icon type="pie-chart" />
        <span>Summary</span>
      </Menu.Item>
      <Menu.Item key="SECTORS">
        <Icon type="desktop" />
        <span>Sector Breakdown</span>
      </Menu.Item>
      <Menu.Item key="SEASONALITY">
        <Icon type="inbox" />
        <span>Seasonality</span>
      </Menu.Item>
      <Menu.Item key="ALERTS">
        <Icon type="warning" />
        <span>Alerts</span>
      </Menu.Item>
      <Menu.Item key="MOVERS">
        <Icon type="line-chart" />
        <span>Movers</span>
      </Menu.Item>
    </Menu>
  );
};
