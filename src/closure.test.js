describe('multiplier', () => {
  const multiplier = (init) => {
    // TODO: Complete this function to allow the test to pass

    var product = 1;

    // Function that multiplies the given value
    // with previous product and returns itself
    function multiply(num) {
      product *= num;
      return multiply;
    };

    // Forcing to final evaluation
    multiply.valueOf = function() { return product; };

    // Returning the product of multiplication
    return multiply(init);
  };

  describe('when given a number, a function is returned which when called', () => {
    it('returns the multiplication of the two numbers', () => {
      const times12 = multiplier(12);

      assert.equal(times12(3), 36);
    });
  });
});

describe('counter', () => {
  const count = ((n) => {
    // TODO: Complete this function to allow the test to pass

    // Function that returns the incremental value
    return function() {
      return ++n;
    }
  })(-1);

  it('returns an increasing number each time it is called', () => {
    assert.equal(count(), 0);
    assert.equal(count(), 1);
    assert.equal(count(), 2);
  });
});
