# Setup and development

- [Setup and development](#setup-and-development)
  - [First-time setup](#first-time-setup)
  - [Installation](#installation)
    - [Developing with the production API](#developing-with-the-production-api)


## First-time setup

Make sure you have the following installed:

- [Node](https://nodejs.org/en/) (at least the latest LTS)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/) (at least 1.0)

## Yarn -- Installation & Dev Server

```bash
# Install dependencies from package.json
yarn install
```

> Note: If you're on Linux and see an `ENOSPC` error when running the commands below, you must [increase the number of available file watchers](https://stackoverflow.com/questions/22475849/node-js-error-enospc#answer-32600959).

```bash
# Launch the dev server
yarn dev

# Launch the dev server and automatically open it in
# your default browser when ready
yarn dev --open

# Launch the dev server with the Cypress client for
# test-driven development in a friendly interface
yarn dev:e2e
```

## npm -- Installation & Dev Server

### Project setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
### Lints and fixes files
```
npm run lint
```

## Developing with the production API

Shows all the characters and locations for the universe of Rick and Morty. In order to complete that, Use the public [Rick and Morty's API](https://rickandmortyapi.com/).

```bash
# To develop against a Graphql 
VUE_APP_GRAPHQL_BASE_URL = https://rickandmortyapi.com/graphql/

# To test and develop against a REST API
VUE_APP_API_BASE_URL = https://rickandmortyapi.com/api/
```
