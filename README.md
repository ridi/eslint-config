# eslint-config

A rule set of RIDI's ESLint configurations based on Airbnb's.

## Installation

Install `@ridi/eslint-config` package:

```
npm install --save-dev eslint @ridi/eslint-config
```

## Usage

#### Default (airbnb based, outdated)

```javascript
{
  "extends": "@ridi",
  "rules": {
    // exceptions
  }
}
```

#### Typescript

```js
{
  "extends": [
    "@ridi/eslint-config/typescript",
  ],
}
```
> * @typescript-eslint/eslint-plugin

#### React

```js
{
  "extends": [
    "@ridi/eslint-config/react",
  ],
}
```
> * eslint-plugin-import
> * eslint-plugin-jsx-a11y
> * eslint-plugin-react
> * eslint-plugin-react-hooks

#### Prettier

works fine with local configuration file (e.g. .prettierrc)

```js
{
  "extends": [
    "@ridi/eslint-config/prettier",
  ],
}
```
> * eslint-plugin-prettier
