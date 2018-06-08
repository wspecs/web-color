# web-color

A simple package with lots of web color names.

![npm](https://img.shields.io/npm/v/web-color.svg) ![license](https://img.shields.io/npm/l/web-color.svg) ![github-issues](https://img.shields.io/github/issues/web-color.svg)

![nodei.co](https://nodei.co/npm/web-color.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/web-color.svg)
![stars](https://img.shields.io/github/stars/web-color.svg)
![forks](https://img.shields.io/github/forks/web-color.svg)

![forks](https://img.shields.io/github/forks/web-color.svg)

![](https://david-dm.org/web-color/status.svg)
![](https://david-dm.org/web-color/dev-status.svg)

## Features

- Parse text with chords

## Usage

```js
import {Color} from 'web-color';
const alice = new Color(240, 248, 255);

// Or
import {color} from 'web-color'

console.log(color.WHITE);
// {red: 255, green 255, blue: 255, rgb: 'FFFFFF'}
```

[See full color list](docs/README.md)
## Install

`npm install --save web-color`

## Scripts

 - **npm run build** : `rm -rf dist && tsc`
 - **npm run test** : `mocha ./dist/test/*.js`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[rgb-hex](https://www.npmjs.com/package/rgb-hex) | ^2.1.0 | ✖
[@types/chai](https://www.npmjs.com/package/@types/chai) | ^4.1.3 | ✔
[@types/mocha](https://www.npmjs.com/package/@types/mocha) | ^5.2.1 | ✔
[@types/node](https://www.npmjs.com/package/@types/node) | ^10.3.2 | ✔
[chai](https://www.npmjs.com/package/chai) | ^4.1.2 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^5.2.0 | ✔


## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains TypeScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

Wendly Saintil <wendlysaintil@gmail.com> https://twitter.com//wendlysaintil

## License

 - **MIT** : http://opensource.org/licenses/MIT