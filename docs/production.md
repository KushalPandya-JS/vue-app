# Building and deploying to production

- [From the terminal](#from-the-terminal)
- [From Github Actions](#from-github-actions)

## From the terminal

```bash
# Build for production with minification
yarn build
npm run build
```

This results in your compiled application in a `dist` directory.

## From Github Actions

to automatically deploy to staging and/or production on a successful build.
