var assert = require('chai').assert;

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('This assert module', function () {
  const foo = 'bar';
  const beverages = { tea: ['chai', 'matcha', 'oolong'] };
  it('should return -1 when the value is not present', function () {
    assert.typeOf(foo, 'string'); // without optional message
    assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
    assert.equal(foo, 'bar', 'foo equal `bar`');
    assert.lengthOf(foo, 4, 'foo`s value has a length of 3');
    assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
  });
});
