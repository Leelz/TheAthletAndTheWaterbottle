var bottle = require('../water_bottle')
var assert = require('assert');

describe('Water Bottle', function() {
  it('should be empty at the start', function(){
    assert.equal(0, bottle.volume);
  });
  it('should be 100 when full', function(){
    assert.equal(100, bottle.fillWaterBottle());
  });
  it('should decrease by 10 when drank', function(){
    assert.equal(90, bottle.drinkWater());
  });
  it('should decrease to 0 when emptied', function(){
    assert.equal(0, bottle.empty());
  });
  it('Water bottle cannot go below 0ml', function(){
    bottle.volume = 9;
    bottle.drinkWater();
    assert.equal(9, bottle.volume);
  });
  it('Athlete drinks', function(){
    bottle.volume = 9;
    bottle.drinkWater();
    assert.equal(9, bottle.volume);
  });
});