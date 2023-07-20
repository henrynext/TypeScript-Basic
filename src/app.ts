function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("Logging -Person")
class Person {
  name = "Henry";

  constructor() {
    console.log("Creating person object!");
  }
}

const person = new Person();

console.log(person);
