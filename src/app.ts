// const names: Array<string> = ["Henry"]; // string[]
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then(data => {
//     // data.split(' ');
// })

function merge<T extends object, U extends object | number>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Henry", hobbies: ["Sports"] }, 30);

console.log(mergeObj);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got a 1 elements.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndPrint("Hi there!"));
console.log(countAndPrint(["Sports", "Cool"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value " + obj[key];
}

console.log(extractAndConvert({ name: "Henry" }, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

const textStorate = new DataStorage<string>();
textStorate.addItem("Henry");
textStorate.addItem("King");
console.log(textStorate.getItem());

textStorate.removeItem("King");
console.log(textStorate.getItem());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Henry'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Henry'});
// objStorage.addItem({name: 'Lukas'});
// objStorage.addItem({name: 'janny'});
// console.log(objStorage.getItem());

// objStorage.removeItem(maxObj);
// console.log(objStorage.getItem());

// const numberText = new DataStorage<number>();
// numberText.addItem(5);
// console.log(numberText.getItem());
// numberText.getItem();

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Henry', 'Sports'];
// names.push('Manu');
// names.pop();
console.log(names);

