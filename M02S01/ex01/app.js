class Car {
  topSpeed = 160;
  topReverseSpeed = -50;
  isTrunkOpen = false;
  areLightson = false;
  constructor(
    make, 
    color, 
    wheels, 
    speed
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels; 
    this.speed = speed;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }
  stop() {
    this.speed = 0;
    console.log(this.speed);
  }
  setSpeed(speed) {
    if (speed > this.topSpeed){
      this.speed = this.topSpeed;
      return;
    }
    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      return;
    }
    this.speed = speed;
    return speed;
  }
  openTrunk() {
    if(this.isTrunkOpen){
      alert('already open')
      return;
    }
    this.isTrunkOpen = true;
  }
  closeTrunk() {
    if(!this.isTrunkOpen){
      alert('already closed')
      return;
    }
    this.isTrunkOpen = false;
  }
  turnLightsOn() {
    if(this.areLightsOn){
      console.log('already on')
      return;
    }
    this.areLightson = true;
  }
  turnLightsOff() {
    if(!this.areLightson){
     console.log('already off')
      return;
    }
    this.areLightson = false;
  }
  flashLights() {
    this.turnLightsOff();
    this.turnLightsOn();
    window.setTimeout(() => {
      this.turnLightsOff()}, 5000)


  }
}

var audi = new Car('Audi', 'black', 4, 50);
let opel = new Car('Opel','red', 4, 3);

let cars = [audi, opel];

cars.forEach((car) => {
  console.log(`Masina era marca ${car.make} si se deplasa cu viteza ${car.speed}`)
  car.decelerate();
  car.decelerate();
  car.decelerate();
  car.decelerate();
  car.decelerate();
  console.log(`Viteza noua este ${car.speed}`)
});