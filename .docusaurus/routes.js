
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
    component: ComponentCreator('/','f76'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','98e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/associate/customers',
        component: ComponentCreator('/associate/customers','13a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/associate/suppliers',
        component: ComponentCreator('/associate/suppliers','9bc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/associate/users-management',
        component: ComponentCreator('/associate/users-management','4a2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/dispatching/delivery-receipt',
        component: ComponentCreator('/dispatching/delivery-receipt','889'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/dispatching/documents-delivery',
        component: ComponentCreator('/dispatching/documents-delivery','409'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/dispatching/sales-invoice',
        component: ComponentCreator('/dispatching/sales-invoice','5e0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/dispatching/sales-order',
        component: ComponentCreator('/dispatching/sales-order','8f1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/dispatching/sales-return',
        component: ComponentCreator('/dispatching/sales-return','181'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/general-applications/issue-center',
        component: ComponentCreator('/general-applications/issue-center','46f'),
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
        path: '/general-applications/user-contact-list',
        component: ComponentCreator('/general-applications/user-contact-list','7f5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/human-resources-management/candidate',
        component: ComponentCreator('/human-resources-management/candidate','941'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/human-resources-management/job-vacancy',
        component: ComponentCreator('/human-resources-management/job-vacancy','ad3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/inventory-control/inventory-item',
        component: ComponentCreator('/inventory-control/inventory-item','d7d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/inventory-control/item-group',
        component: ComponentCreator('/inventory-control/item-group','244'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/inventory-control/stock-group',
        component: ComponentCreator('/inventory-control/stock-group','8e0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/main-web-config/blog',
        component: ComponentCreator('/main-web-config/blog','599'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/main-web-config/gallery',
        component: ComponentCreator('/main-web-config/gallery','56e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/main-web-config/popup-window',
        component: ComponentCreator('/main-web-config/popup-window','38e'),
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
      },
      {
        path: '/privacy-others/activity-log',
        component: ComponentCreator('/privacy-others/activity-log','7d1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/receiving-putaway/documents-receipt',
        component: ComponentCreator('/receiving-putaway/documents-receipt','483'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/receiving-putaway/purchase-invoice',
        component: ComponentCreator('/receiving-putaway/purchase-invoice','9ab'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/receiving-putaway/purchase-order',
        component: ComponentCreator('/receiving-putaway/purchase-order','376'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/receiving-putaway/purchase-request',
        component: ComponentCreator('/receiving-putaway/purchase-request','766'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/receiving-putaway/purchase-return',
        component: ComponentCreator('/receiving-putaway/purchase-return','246'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/technology/analytics',
        component: ComponentCreator('/technology/analytics','dac'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/technology/cloud',
        component: ComponentCreator('/technology/cloud','808'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/technology/iot',
        component: ComponentCreator('/technology/iot','300'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/warehouse/warehouse-lists',
        component: ComponentCreator('/warehouse/warehouse-lists','ed1'),
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
