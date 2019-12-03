let car = {
  make: 'Audi',
  color: 'Black',
  wheels: 4,
  speed: 50,
  isTrunkOpen:false,
  areLightsOn:false,
  turnLightsOn: function() {
    this.areLightsOn = true;
  },
  turnLightsOff: function() {
    this.areLightsOn = false;
  },
  flashLights: function() {
    this.turnLightsOff();
    this.turnLightsOn();
    window.setTimeout(() => {
      this.turnLightsOff();
    }, 800)
  },
  openTrunk: function() {
    this.isTrunkOpen=true;
  },
  closeTrunk: function() {
    this.isTrunkOpen=false
  },
  accelerate: function() {
    this.speed++;
  },
  decelerate: function() {
    this.speed--;
  },
  stop: function() {
    this.speed=0;
    console.log(this.speed);
  },
  topSpeed: function() {
    this.speed=160;
    console.log(this.speed);
  },
  topReverseSpeed: function() {
    this.speed=-50;
    console.log(this.speed);
  },
  setSpeed: function(s) {
    if(s > -50) {
      this.speed=s;
    }else {
      car.topReverseSpeed();
      console.warn('Below top reverse speed.')
    }
    if( s < 161) {
      this.speed=s;
    } else {
      car.topSpeed();
      console.warn('Above top speed')
    };
  }
  
};


console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h`);
for (i=0; i<5; i++) {
  car.decelerate()
};
console.log(`Viteza noua este de ${car.speed}`);