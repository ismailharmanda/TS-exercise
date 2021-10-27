class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vroom");
  }
  public startDrivingProcess(): void {
    this.drive();
    this.honk();
    console.log(this.color);
    console.log(this.wheels);
  }
}

const car = new Car(4, "pink");

car.startDrivingProcess();
