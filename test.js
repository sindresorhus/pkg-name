'use strict';
var assert = require('assert');
var pkgName = require('./index');

it('should return false when package name is taken', function (cb) {
	pkgName('jquery', function (err, available) {
		assert(!err, err);
		assert.deepEqual(available, {npm: false, bower: false});
		cb();
	});
});

it('should return true when package name is available', function (cb) {
	pkgName('asdfjsdakfhbsdajkfhasd', function (err, available) {
		assert(!err, err);
		assert.deepEqual(available, {npm: true, bower: true});
		cb();
	});
});
