// BLUEPRINT TO CREATE AN OBJECT WITH SOME FIELDS AND METHODS TO REPRESENT A 'THING'

class Vehicle {
  // color: string = 'red';
  constructor(public color: string) {
    this.color = color;
  }

  // by setting it to 'protected', the method can be called by another methods in this class, or by other methods in child class
  protected honk(): void {
    console.log('Beep');
  }
}

const vehicle = new Vehicle('orange');
vehicle.color;

class Car extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super(color);
  }
  // private means only the methods inside this class can call this function
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
