# pkg-name [![Build Status](https://travis-ci.org/sindresorhus/pkg-name.svg?branch=master)](https://travis-ci.org/sindresorhus/pkg-name)

> Check whether a package name is available on npm and bower


## Install

```sh
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

```sh
$ npm install --global pkg-name
```

```sh
$ pkg-name --help

  Usage
    pkg-name <name>
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
