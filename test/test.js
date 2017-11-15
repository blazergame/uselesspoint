var uselessPoint = require('../index.js');
var assert = require('assert');

describe('extendTime()', () => {
    it('It should return false', () => {
        assert.equal(false,uselessPoint.extendTime(3));
    });    
});


describe('spacer()', () => {
    it('It should return false', () => {
        assert.equal(9,uselessPoint.spacer());
    });    
});