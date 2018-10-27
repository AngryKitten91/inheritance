function Vehicle() {
    this.move = function () {
        return this.sound;
    };
    this.getWheelNumber = function () {
        return this.wheel;
    };
}

const vehicle = new Vehicle();

const bike = Object.create(vehicle);
const car = Object.create(vehicle);

function addProperties(object, wheel, sound) {
    object.wheel = wheel;
    object.sound = sound;
}

addProperties(bike, 2, 'ding');
addProperties(car, 4, 'wroom');

function factory(wheelsNumber) {
    if (wheelsNumber === 2) {
        return Object.create(bike);
    } else if (wheelsNumber === 4) {
        return Object.create(car);
    } else {
        throw new Error('Wheels number must equal to 2 or 4');
    }
}

const myNewBike = factory(2);
const myNewCar = factory(4);

console.log(myNewBike.getWheelNumber(), myNewCar.getWheelNumber());

