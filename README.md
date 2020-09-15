# @ridi/eslint-config
[![npm version](https://badge.fury.io/js/%40ridi%2Feslint-config.svg)](https://badge.fury.io/js/%40ridi%2Feslint-config)   
A rule set of RIDI's ESLint configurations based on Airbnb's.

## Installation

Install `@ridi/eslint-config` package:

1. Install the correct versions of each package, which are listed by the command:
```
npm info "@ridi/eslint-config" peerDependencies
```
2. Install via package manager:
```
npm install --save-dev eslint @ridi/eslint-config
```
or
```
yarn --dev eslint @ridi/eslint-config
```

## Usage

### Javascript
```javascript
module.exports = {
  extends: [
    '@ridi/eslint-config'
  ]
}
```

### @ridi/eslint-config/typescript
> * @typescript-eslint/eslint-plugin


#### Typescript
```javascript
module.exports = {
  extends: [
    '@ridi/eslint-config',
    '@ridi/eslint-config/typescript'
  ]
}
```

### @ridi/eslint-config/react
> * eslint-plugin-import
> * eslint-plugin-jsx-a11y
> * eslint-plugin-react
> * eslint-plugin-react-hooks

#### Javascript + React
```js
{
  "extends": [
    '@ridi/eslint-config',
    '@ridi/eslint-config/react',
  ],
}
``` 


#### Typescript + React
```javascript
module.exports = {
  extends: [
    '@ridi/eslint-config',
    '@ridi/eslint-config/typescript'
    '@ridi/eslint-config/react'
  ]
}
```
### @ridi/eslint-config/prettier
> * eslint-plugin-prettier

#### Prettier

works fine with local configuration file (e.g. .prettierrc)

```js
{
  "extends": [
    '@ridi/eslint-config',
    '@ridi/eslint-config/prettier',
  ],
}
```




