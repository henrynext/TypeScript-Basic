function Logger(logString: string) {
  console.log("Logger Factory");

  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("Template Factory");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template");

        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

// @Logger("Logging -Person")
@Logger("Logging")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Alice";

  constructor() {
    console.log("Creating person object!");
  }
}

const person = new Person();

console.log(person);

function Log(target: any, propertyName: string | symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accesor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product("Book", 19);
const p2 = new Product("Book 2", 29);

// function Autobind(_: any, _2: string, descriptor: PropertyDecorator) {
//   const originalMethod = descriptor.value;
//   const adjDescriptor: PropertyDecorator = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       const boundFn = originalMethod.bind(this);
//       return boundFn;
//     }
//   };
//   return adjDescriptor;
// }

class Printer {
  message = "This works!";

  // @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
p.showMessage();
const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);

// decorator

function Required() {

}

function PositiveNumber() {

}

function validate(obj: object) {

}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const pirceEl = document.getElementById('price') as HTMLInputElement;
  
  const title = titleEl.value;
  const price = +pirceEl.value;

  

  const createdCourse = new Course(title, price);
  
  if (!validate(createdCourse)) {
    throw new Error('Invalid input, please try again')
    return;
  }
  console.log(createdCourse);
  

})