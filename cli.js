#!/usr/bin/env node
'use strict';
var logSymbols = require('log-symbols');
var meow = require('meow');
var pkgName = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ pkg-name <name>',
		'',
		'Examples',
		'  $ bower-name multiline',
		'  ' + logSymbols.error + ' Unavailable',
		'  $ bower-name unicorn-cake',
		'  ' + logSymbols.success + ' Available'
	]
});

if (cli.input.length === 0) {
	console.error('Package name required');
	process.exit(1);
}

pkgName(cli.input[0], function (err, available) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log((available.npm ? logSymbols.success : logSymbols.error) + ' npm');
	console.log((available.bower ? logSymbols.success : logSymbols.error) + ' bower');
});
