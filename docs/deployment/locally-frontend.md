---
sidebar_label: Locally - Frontend
title: Flagsmith Frontend
sidebar_position: 3
---

## Getting Started

These instructions will get you a copy of the project front end up and running on your local machine for development and
testing purposes. See running in production for notes on how to deploy the project on a live system.

## Prerequisites

What things you need to install the software and how to install them

| Location                                    | Suggested Version |
| ------------------------------------------- | :---------------: |
| <a href="https://nodejs.org/en/">NodeJS</a> |     >= 6.0.0      |
| <a href="https://nodejs.org/en/">npm</a>    |     >= 4.0.0      |

## Installing

```bash
cd frontend
npm i
```

## Running the Front End

### Development

Hot reloading for client / server

```bash
cd frontend
npm run dev
```

### Production

You can deploy this application on [Heroku](https://www.heroku.com/) and [Dokku](http://dokku.viewdocs.io/dokku/)
without making any changes, other than the API URL in '/frontend/env/project_prod.js'

Bundles, minifies and cache busts the project to a build folder and runs node in production. This can be used as part of
your deployment script.

```bash
cd frontend
npm run bundle
npm start
```

## Environment Variables

Variables that differ per environment are exported globally to `window.Project in` 'frontend/common/project.js', this
file gets replaced by a project.js located in 'frontend/env' by webpack based on what is set to the "ENV" environment
variable (e.g. ENV=prod).

You can override each variable individually or add more by editing 'frontend/bin/env.js'.

Current variables used between 'frontend/environment.js' and 'frontend/common/project.js':

- `API_URL`: The API to hit for requests. E.g. `https://api.flagsmith.com/api/v1/`
- `FLAGSMITH`: The flagsmith environment key we use to manage features - Flagsmith runs on Flagsmith.
- `FLAGSMITH_CLIENT_API`: The api which the flagsmith client should communicate with. Flagsmith runs on flagsmith. E.g.
  `https://api.flagsmith.com/api/v1/`.
- `DISABLE_INFLUXDB_FEATURES`: Disables any features that rely on influxdb. API Usage charts, flag analytics. E.g.
  `DISABLE_INFLUXDB_FEATURES=1`.
- `FLAGSMITH_ANALYTICS`: Determines if the flagsmith sdk should send usage analytics, if you want to disable analytics
  don't set this. E.g. `true`.
- `PROXY_API_URL`: Proxies the API via this application. Set this to the hostname of the API being proxied. Proxies
  `/api/v1/` through to `PROXY_API_URL`. If you are using this, any setting to `API_URL` will be ignored and the browser
  will use the front end node server to send API requests. Do not prepend `api/v1/` - it will be added automatically.
- `GA`: Google analytics key
- `CRISP_CHAT`: Crisp Chat widget key
- `PREVENT_SIGNUP`: Determines whether to prevent manual signup without invite. Set it to any value to disable signups.
- `MAINTENANCE`: Puts the site into maintenance mode. Set it to any value to disable signups.
- `AMPLITUDE`: The Amplitude key to use for behaviour tracking.
- `MIXPANEL`: Mixpanel analytics key to use for behaviour tracking.
- `SENTRY`: Sentry key for error reporting.
- `ASSET_URL`: Used for replacing local static paths with a cdn, .e.g https://cdn.flagsmith.com. Defaults to `/`, i.e.
  no CDN.
- `BASENAME`: Used for specifying a base url path that's ignored during routing if serving from a subdirectory

## E2E testing

This project uses [Nightwatch](http://nightwatchjs.org/) for automated end to end testing with Chromedriver.

```bash
npm test
```

## Built With

- React
- Webpack
- Node

## Running locally against your own Flagsmith API instance

We use Flagsmith to manage features we rollout, if you are using your own Flagsmith environment (i.e. by editing
project_x.js-> flagsmith) then you will need to have a replica of our flags.

A list of the flags and remote config we're currently using in production can be
[found here](/deployment/overview#current-flagsmith-feature-flags).

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/kyle-ssg/c36a03aebe492e45cbd3eefb21cb0486) for details on our code
of conduct, and the process for submitting pull requests to us.

## Getting Help

If you encounter a bug or feature request we would like to hear about it. Before you submit an issue please search
existing issues in order to prevent duplicates.
