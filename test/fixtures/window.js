'use strict';

module.exports = function (initialURI = 'https://github.com') {
	this.location = new URL(initialURI);
	this.navigator = {
		platform: 'test'
	};
};
