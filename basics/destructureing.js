"use strict";
// const userName = "Henry";
// let age = 30;
// age = 29;
// function add(a: number, b: number) {
//   let result = a + b;
//   return result;
// }
// if (age > 30) {
//     let isOld = true;
// }
// console.log(isOld);
// const add = (a: number, b: number = 1) => a + b;
// // console.log(add(2, 5));
// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);
// const button = document.querySelector("button");
// if (button) {
//   button.addEventListener("click", event => console.log(event));
// }
// printOutput(add(3));
const hobbies = ['Sports', 'Cooking'];
console.log(hobbies);
const activeHobbies = ['Hiking'];
// spread & push arrays
activeHobbies.push("Eating", ...hobbies);
console.log(activeHobbies);
const person = {
    firstName: 'Henry',
    firstAge: 30
};
const copiedObj = person;
console.log(copiedObj);
const copiedPerson = { ...person };
console.log(copiedPerson);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.2, 2.1);
console.log(addedNumbers);
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
const { firstName: userNames, firstAge } = person;
console.log(userNames, firstAge, person);
