# pkg-name [![Build Status](https://travis-ci.org/sindresorhus/pkg-name.svg?branch=master)](https://travis-ci.org/sindresorhus/pkg-name)

> Check whether a package name is available on npm and bower


## Install

```bash
$ npm install --save pkg-name
```


## Usage

```js
var pkgName = require('pkg-name');

pkgName('jquery', function (err, available) {
	console.log(available);
	//=> {npm: false, bower: false}
});
```


## CLI

![](screenshot.png)

You can also use it as a CLI app by installing it globally:

```bash
$ npm install --global pkg-name
```

#### Usage

```bash
$ pkg-name --help

Usage
  $ pkg-name <name>
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
