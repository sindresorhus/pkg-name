#!/usr/bin/env node
'use strict';
var chalk = require('chalk');
var pkg = require('./package.json');
var pkgName = require('./index');
var input = process.argv[2];

function help() {
	console.log(pkg.description);
	console.log('');
	console.log('Usage');
	console.log('  $ pkg-name <name>');
}

if (!input || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

pkgName(input, function (err, available) {
	if (err) {
		console.error(err);
		process.exit(1);
		return;
	}

	var check = chalk.green(process.platform !== 'win32' ? '✔' : '√');
	var cross = chalk.red(process.platform !== 'win32' ? '✖' : '×');

	console.log((available.npm ? check : cross) + ' npm');
	console.log((available.bower ? check : cross) + ' bower');
});
