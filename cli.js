#!/usr/bin/env node
'use strict';
var logSymbols = require('log-symbols');
var pkg = require('./package.json');
var pkgName = require('./');
var argv = process.argv.slice(2);
var input = argv[0];

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    pkg-name <name>'
	].join('\n'));
}

if (!input || argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

pkgName(input, function (err, available) {
	if (err) {
		console.error(err.message);
		process.exit(1);
		return;
	}

	console.log((available.npm ? logSymbols.success : logSymbols.error) + ' npm');
	console.log((available.bower ? logSymbols.success : logSymbols.error) + ' bower');
});
