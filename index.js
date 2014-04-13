'use strict';
var eachAsync = require('each-async');
var bowerName = require('bower-name');
var npmName = require('npm-name');

module.exports = function (name, cb) {
	var ret = {};
	var types = {
		bower: bowerName,
		npm: npmName
	};

	eachAsync(Object.keys(types), function (el, i, next) {
		types[el](name, function (err, available) {
			if (err) {
				return next(err);
			}

			ret[el] = available;
			next();
		});
	}, function (err) {
		if (err) {
			return cb(err);
		}

		cb(null, ret);
	});
};
