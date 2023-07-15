const userName = "Henry";
let age = 30;

age = 29;

// function add(a: number, b: number) {
//   let result = a + b;
//   return result;
// }

// if (age > 30) {
//     let isOld = true;
// }

// console.log(isOld);

const add = (a: number, b: number = 1) => a + b;

// console.log(add(2, 5));

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", event => console.log(event));
}

printOutput(add(3));

const hobbies = ['Sports', 'Cooking'];
console.log(hobbies);
const activeHobbies = ['Hiking'];
// spread & push arrays
activeHobbies.push("Eating",...hobbies);

console.log(activeHobbies);

const person = {
    name: 'Henry',
    age: 30
};
const copiedObj = person;
console.log(copiedObj);



const copiedPerson = { ...person };
console.log(copiedPerson);

