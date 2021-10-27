class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
  private drive(): void {
    console.log("vroom");
  }
  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car("orange");

car.startDrivingProcess();
