var athlete = require('../athlete')
var assert = require('assert');

describe('Athlete', function() {
  it('should be 100% hydrated', function(){
    assert.equal(100, athlete.hydration);
  });
});

describe('Athlete', function() {
  it('should have not covered any distance', function(){
    assert.equal(0, athlete.distanceCovered);
  });
});

describe('Athlete', function() {
  it('when running should increased distance and decrease hydration', function(){
    athlete.run();
    assert.equal(10, athlete.distanceCovered);
    assert.equal(90, athlete.hydration);
  });
});

describe('Athlete', function() {
  it('when running should increased distance and decrease hydration', function(){
    athlete.hydration = 0;
    athlete.run();
    assert.equal(0, athlete.hydration);
  });
});

describe('Athlete', function() {
  it('athlete can hydrate', function(){
    athlete.hydration = 90;
    athlete.drink();
    assert.equal(100, athlete.hydration);
  });
});