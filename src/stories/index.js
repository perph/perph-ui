import React from 'react'
import 'antd/dist/antd.css'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import ThemeToggle from '../components/ThemeToggle/index'
import SideNavBar from '../components/SideNavBar/index'
import SideNav from '../components/SideNav'
import { ThemeProvider } from '../theme'
import { Button, Welcome } from '@storybook/react/demo'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))
storiesOf('ThemeToggle', module).add('ThemeToggle', () => <ThemeToggle />)
storiesOf('SideNavigation', module).add('SideNavigation', () => (
  <ThemeProvider>
    <SideNav />
  </ThemeProvider>
))
storiesOf('SideNavBar', module).add('SideNavBar', () => (
  <ThemeProvider>
    <SideNavBar width={200} />
  </ThemeProvider>
))
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
