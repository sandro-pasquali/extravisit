var assert = require('assert');
var vows = require('vows');

var units = require('../');

vows.describe('Math Tests').addBatch({
	'Multiplication': {
		topic: units.MathLib.times2(4),
		'times2': function(result) {
			assert.isNumber(result);
			assert.equal(result, 8);
		}
	}
}).export(module);

