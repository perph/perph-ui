import React from 'react';
import { Menu, Icon, Switch, Button } from 'antd';
const ExpandButton: React.FC = () => {
  const [expand, setExpand] = React.useState(true);
  return (<Button
  type="primary"
  onClick={() => setExpand(!expand)}
  style={{width: 50}}>
  <Icon
      type={
          expand
              ? 'menu-unfold'
              : 'menu-fold'
      }
  />
</Button>)
}
const ThemeWidget: React.FC = () => {
  return null
}