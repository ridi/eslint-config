# Changelog

## [Unreleased]
### Changed
- Upgrade [`eslint-config-airbnb-base` to v13.1.0](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md#1310--2018-08-13)
- Upgrade [`eslint-config-airbnb` to v17.1.0](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/CHANGELOG.md#1710--2018-08-13)
- Update peer dependency version `eslint: "^4.19.1 || ^5.3.0"`

## [v4.1.0] - 2018-06-25
### Changed
- Upgrade [`eslint-config-airbnb-base` to v13.0.0](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/CHANGELOG.md#1300--2018-06-21)
- Upgrade [`eslint-config-airbnb` to v17.0.0](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/CHANGELOG.md#1700--2018-06-21)

## [v4.0.1] - 2018-03-02
### Added
- Add exceptional rules
	- `'camelcase': ['error', { properties: 'never' }]`
	- `'class-methods-use-this': 'off'`
	- `'max-len': ['warn', 120]`
	- `'no-multi-spaces': ['error', { ignoreEOLComments: true }]`
	- `'jsx-a11y/label-has-for': ['error', { required: 'id' }]`

## [v4.0.0] - 2018-02-01
### Removed
- Clear up all exceptional rules

[Unreleased]: https://github.com/ridi/eslint-config/compare/v4.1.0...HEAD
[v4.1.0]: https://github.com/ridi/eslint-config/compare/v4.0.1...v4.1.0
[v4.0.1]: https://github.com/ridi/eslint-config/compare/v4.0.0...v4.0.1
[v4.0.0]: https://github.com/ridi/eslint-config/compare/v3.0.0...v4.0.0
