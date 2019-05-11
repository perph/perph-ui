import React from 'react'
import 'antd/dist/antd.css';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import ToggleBasic from '../components/ToggleBasic/index'
import ThemeToggle from '../components/ThemeToggle/index'
import SideNav from '../components/SideNav'
import { Button, Welcome } from '@storybook/react/demo'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))
storiesOf('ToggleBasic', module).add('ToggleBasic', () => <ToggleBasic />)
storiesOf('ThemeToggle', module).add('ThemeToggle', () => <ThemeToggle />)
storiesOf('SideNavigation', module).add('SideNavigation', () => <SideNav />)
storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role='img' aria-label='so cool'>
        😀 😎 👍 💯
      </span>
    </Button>
  ))
