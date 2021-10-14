export default {
  "title": "Boxity Docs",
  "tagline": "The documentation books for boxity applications. Dev by Bintang Tobing/Boxity Central Indonesia.",
  "url": "https://docs.boxity.id",
  "baseUrl": "/",
  "onBrokenLinks": "ignore",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon-boxity.ico",
  "organizationName": "Boxity",
  "projectName": "boxity-docs",
  "plugins": [
    "@ionic-internal/docusaurus-plugin-tag-manager"
  ],
  "themeConfig": {
    "prism": {
      "additionalLanguages": [
        "java",
        "csharp",
        "ruby",
        "rust",
        "swift",
        "dart"
      ]
    },
    "algolia": {
      "apiKey": "d207a6e4abfead06cecba47adc7d1515",
      "indexName": "flagsmith",
      "contextualSearch": false,
      "appId": "BH4D9OD16A",
      "searchParameters": {}
    },
    "tagManager": {
      "trackingID": "GTM-5ZV5K5G"
    },
    "navbar": {
      "title": "Boxity",
      "logo": {
        "alt": "Boxity Logo",
        "src": "img/logosvg.png"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Docs",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "href": "https://github.com/bintangjtobing/boxity-docs",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Boxity",
          "items": [
            {
              "label": "boxity.id",
              "to": "https://boxity.id/"
            },
            {
              "label": "Instagram",
              "href": "https://instagram.com/boxityapp"
            }
          ]
        },
        {
          "title": "Open Source",
          "items": [
            {
              "label": "Github",
              "href": "https://github.com/boxity-docs"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Boxity Central Indonesia. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Volumes/StorageY/GitHub/boxity-docs/sidebars.js",
          "routeBasePath": "/",
          "editUrl": "https://github.com/bintangjtobing/boxity-docs"
        },
        "theme": {
          "customCss": "/Volumes/StorageY/GitHub/boxity-docs/src/css/custom.css"
        }
      }
    ]
  ],
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en",
      "id"
    ],
    "localeConfigs": {
      "en": {
        "label": "English",
        "direction": "ltr"
      },
      "id": {
        "label": "Indonesian",
        "direction": "ltr"
      }
    }
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};