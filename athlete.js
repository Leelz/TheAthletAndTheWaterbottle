var athlete = {
  hydration: 100,
  distanceCovered: 0,
  run: function() {
    if(this.hydration === 0){
      return "I'm shattered"
    } else {
    this.hydration -= 10;
    this.distanceCovered += 10;
    }
  },
  drink: function() {
    this.hydration += 10;
    }
  }

module.exports = athlete;