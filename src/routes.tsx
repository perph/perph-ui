const navItems = [
  {
    title: 'Overview',
    icon: 'shop',
    to: '/overview',
    pathsActive: [/^\/overview\/(.*)/],
  },
  {
    title: 'Management',
    icon: 'control',
    to: '/management',
    pathsActive: [/^\/management\/(.*)/],
  },
  {
    title: 'Dashboards',
    to: '/dashboards',
    pathsActive: [/^\/dashboards\/(.*)/],
    icon: 'dashboard',
  },
  {
    title: 'Alerts',
    icon: 'alert',
    to: '/alerts',
    pathsActive: [/^\/alerts\/(.*)/],
  },
  {
    title: 'Realtime',
    icon: 'experiment',
    to: '/realtime',
    pathsActive: [/^\/realtime\/(.*)/],
  },
];

const defaultRoute = '/overview';

export { defaultRoute, navItems };
