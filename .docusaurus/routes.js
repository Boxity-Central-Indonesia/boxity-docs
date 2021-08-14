
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','d97'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','ecc'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','98e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/advanced-use/ab-testing',
        component: ComponentCreator('/advanced-use/ab-testing','72a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/advanced-use/api',
        component: ComponentCreator('/advanced-use/api','de9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/advanced-use/audit-logs',
        component: ComponentCreator('/advanced-use/audit-logs','4ec'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/advanced-use/flag-analytics',
        component: ComponentCreator('/advanced-use/flag-analytics','cad'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/advanced-use/integration-approaches',
        component: ComponentCreator('/advanced-use/integration-approaches','1e7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/advanced-use/permissions',
        component: ComponentCreator('/advanced-use/permissions','f85'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/advanced-use/staged-feature-rollouts',
        component: ComponentCreator('/advanced-use/staged-feature-rollouts','806'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/advanced-use/system-administration',
        component: ComponentCreator('/advanced-use/system-administration','f75'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/clients/02-3rd-party',
        component: ComponentCreator('/clients/02-3rd-party','7f6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/clients/android',
        component: ComponentCreator('/clients/android','8ef'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/clients/dotnet',
        component: ComponentCreator('/clients/dotnet','de1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/clients/flutter',
        component: ComponentCreator('/clients/flutter','d9e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/clients/go',
        component: ComponentCreator('/clients/go','fef'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/clients/ios',
        component: ComponentCreator('/clients/ios','2a5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/clients/java',
        component: ComponentCreator('/clients/java','493'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/clients/javascript',
        component: ComponentCreator('/clients/javascript','dd8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/clients/node',
        component: ComponentCreator('/clients/node','372'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/clients/php',
        component: ComponentCreator('/clients/php','614'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/clients/python',
        component: ComponentCreator('/clients/python','867'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/clients/rest',
        component: ComponentCreator('/clients/rest','066'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/clients/ruby',
        component: ComponentCreator('/clients/ruby','a70'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/clients/rust',
        component: ComponentCreator('/clients/rust','d41'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/deployment/AWS',
        component: ComponentCreator('/deployment/AWS','a10'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/deployment/docker',
        component: ComponentCreator('/deployment/docker','8db'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/deployment/kubernetes',
        component: ComponentCreator('/deployment/kubernetes','91a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/deployment/locally-api',
        component: ComponentCreator('/deployment/locally-api','547'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/deployment/locally-frontend',
        component: ComponentCreator('/deployment/locally-frontend','d98'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/deployment/openshift',
        component: ComponentCreator('/deployment/openshift','974'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/deployment/overview',
        component: ComponentCreator('/deployment/overview','f58'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/deployment/sizing-and-scaling',
        component: ComponentCreator('/deployment/sizing-and-scaling','a2b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/general-applications/managing-features',
        component: ComponentCreator('/general-applications/managing-features','b39'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/general-applications/managing-identities',
        component: ComponentCreator('/general-applications/managing-identities','7ef'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/general-applications/managing-segments',
        component: ComponentCreator('/general-applications/managing-segments','583'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/general-applications/overview',
        component: ComponentCreator('/general-applications/overview','cd9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/integrations/amplitude',
        component: ComponentCreator('/integrations/amplitude','400'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/integrations/appdynamics',
        component: ComponentCreator('/integrations/appdynamics','068'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/integrations/datadog',
        component: ComponentCreator('/integrations/datadog','169'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/integrations/heap',
        component: ComponentCreator('/integrations/heap','e97'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/integrations/mixpanel',
        component: ComponentCreator('/integrations/mixpanel','6fb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/integrations/newrelic',
        component: ComponentCreator('/integrations/newrelic','510'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/integrations/overview',
        component: ComponentCreator('/integrations/overview','eba'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/integrations/segment',
        component: ComponentCreator('/integrations/segment','c7d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/integrations/slack',
        component: ComponentCreator('/integrations/slack','5a5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/platform/contributing',
        component: ComponentCreator('/platform/contributing','6eb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/platform/releases',
        component: ComponentCreator('/platform/releases','3e4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
