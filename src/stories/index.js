import React from 'react'
import 'antd/dist/antd.css'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import { BrowserRouter as Router } from 'react-router-dom'
import syntheticJob from '../api/fixtures/jobs/syntheticJob.json'
import { sections } from '../config'
import ThemeToggle from '../components/ThemeToggle/index'
import SideNavBar from '../components/SideNavBar/index'
import ManagementItem from '../components/ManagementItem'
import { ThemeProvider } from '../theme'
import { Button, Welcome } from '@storybook/react/demo'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))
storiesOf('ThemeToggle', module).add('ThemeToggle', () => <ThemeToggle />)
storiesOf('SideNavBar', module).add('SideNavBar', () => (
  <ThemeProvider>
    <Router>
      <SideNavBar sections={sections} width={200} />
    </Router>
  </ThemeProvider>
))
storiesOf('ManagementItem', module)
  .addDecorator(withInfo)
  .add('SyntheticHeader', () => (
    <ThemeProvider>
      <ManagementItem type={'SYNTHETIC'} />
    </ThemeProvider>
  ))
storiesOf('ManagementItem', module)
  .addDecorator(withInfo)
  .add(
    'SyntheticRow',
    () => (
      <ThemeProvider>
        <ManagementItem type={'SYNTHETIC'} data={syntheticJob} />
      </ThemeProvider>
    ),
    {
      info: { text: `data: ${syntheticJob}` }
    }
  )
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
