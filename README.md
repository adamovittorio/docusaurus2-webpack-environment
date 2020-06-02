
# Docusaurus2 Webpack Environment Plugin

Docusaurus2 plugin that enable environment variables substitution in your webpack bundled app.

### Installation

Install the package in your repository


#### npm

```
npm install docusaurus2-webpack-environment
```

#### yarn
```
yarn add docusaurus2-webpack-environment
```

### Description

The docusaurus2-webpack-environment plugin wraps the [webpack EnvironmentPlugin](https://webpack.js.org/plugins/environment-plugin/) to allow the usage of environment variables in Docusaurus2 projects. This allows you to access your environment variables via `process.env.VARIABLE_NAME` in your code.

### Usage

docusaurus.config.js

```
module.exports = {
    ...
    plugins: [
        'docusaurus2-dotenv', {
          MY_ENV: "default"
        }
    ],
    ...
}
```