var waterBottle = {
  volume: 0,
  fillWaterBottle: function() {
    return this.volume = 100;
  },
  drinkWater: function() {
    if(this.volume < 10) {
      return this.volume;
    } else {
      return this.volume - 10;
    }
  },
  empty: function() {
    return this.volume = 0;
  },

}





module.exports = waterBottle;