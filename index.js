'use strict';
var eachAsync = require('each-async');
var bowerName = require('bower-name');
var npmName = require('npm-name');

module.exports = function (name, cb) {
	if (!(typeof name === 'string' && name.length !== 0)) {
		throw new Error('Package name required');
	}

	name = name.toLowerCase();

	var ret = {};
	var types = {
		bower: bowerName,
		npm: npmName
	};

	eachAsync(Object.keys(types), function (el, i, next) {
		types[el](name, function (err, available) {
			if (err) {
				next(err);
				return;
			}

			ret[el] = available;
			next();
		});
	}, function (err) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, ret);
	});
};
