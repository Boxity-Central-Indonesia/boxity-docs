
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/id/search',
    component: ComponentCreator('/id/search','b26'),
    exact: true
  },
  {
    path: '/id/',
    component: ComponentCreator('/id/','a61'),
    routes: [
      {
        path: '/id/',
        component: ComponentCreator('/id/','804'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/associate/customers',
        component: ComponentCreator('/id/associate/customers','c7c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/associate/suppliers',
        component: ComponentCreator('/id/associate/suppliers','f74'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/associate/users-management',
        component: ComponentCreator('/id/associate/users-management','384'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/dispatching/delivery-receipt',
        component: ComponentCreator('/id/dispatching/delivery-receipt','7db'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/dispatching/documents-delivery',
        component: ComponentCreator('/id/dispatching/documents-delivery','488'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/dispatching/sales-invoice',
        component: ComponentCreator('/id/dispatching/sales-invoice','59a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/dispatching/sales-order',
        component: ComponentCreator('/id/dispatching/sales-order','e99'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/dispatching/sales-return',
        component: ComponentCreator('/id/dispatching/sales-return','a48'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/general-applications/issue-center',
        component: ComponentCreator('/id/general-applications/issue-center','155'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/general-applications/overview',
        component: ComponentCreator('/id/general-applications/overview','1c3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/general-applications/user-contact-list',
        component: ComponentCreator('/id/general-applications/user-contact-list','8d3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/human-resources-management/candidate',
        component: ComponentCreator('/id/human-resources-management/candidate','9d8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/human-resources-management/job-vacancy',
        component: ComponentCreator('/id/human-resources-management/job-vacancy','db8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/inventory-control/inventory-item',
        component: ComponentCreator('/id/inventory-control/inventory-item','37d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/inventory-control/item-group',
        component: ComponentCreator('/id/inventory-control/item-group','bbd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/inventory-control/stock-group',
        component: ComponentCreator('/id/inventory-control/stock-group','612'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/main-web-config/blog',
        component: ComponentCreator('/id/main-web-config/blog','70f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/main-web-config/gallery',
        component: ComponentCreator('/id/main-web-config/gallery','d7a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/main-web-config/popup-window',
        component: ComponentCreator('/id/main-web-config/popup-window','9f4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/notifier/telegram-notificaion',
        component: ComponentCreator('/id/notifier/telegram-notificaion','f86'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/platform/contributing',
        component: ComponentCreator('/id/platform/contributing','c1e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/platform/releases',
        component: ComponentCreator('/id/platform/releases','50c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/privacy-others/activity-log',
        component: ComponentCreator('/id/privacy-others/activity-log','9b0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/receiving-putaway/documents-receipt',
        component: ComponentCreator('/id/receiving-putaway/documents-receipt','a18'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/receiving-putaway/purchase-invoice',
        component: ComponentCreator('/id/receiving-putaway/purchase-invoice','8bf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/receiving-putaway/purchase-order',
        component: ComponentCreator('/id/receiving-putaway/purchase-order','b03'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/receiving-putaway/purchase-request',
        component: ComponentCreator('/id/receiving-putaway/purchase-request','bea'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/receiving-putaway/purchase-return',
        component: ComponentCreator('/id/receiving-putaway/purchase-return','a09'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/technology/analytics',
        component: ComponentCreator('/id/technology/analytics','321'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/technology/cloud',
        component: ComponentCreator('/id/technology/cloud','e6c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/technology/iot',
        component: ComponentCreator('/id/technology/iot','f11'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/id/warehouse/warehouse-lists',
        component: ComponentCreator('/id/warehouse/warehouse-lists','e2f'),
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
