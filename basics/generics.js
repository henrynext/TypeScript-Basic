"use strict";
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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "Henry", hobbies: ["Sports"] }, 30);
console.log(mergeObj);
function countAndPrint(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got a 1 elements.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndPrint("Hi there!"));
console.log(countAndPrint(["Sports", "Cool"]));
function extractAndConvert(obj, key) {
    return "Value " + obj[key];
}
console.log(extractAndConvert({ name: "Henry" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItem() {
        return [...this.data];
    }
}
const textStorate = new DataStorage();
textStorate.addItem("Henry");
textStorate.addItem("King");
console.log(textStorate.getItem());
textStorate.removeItem("King");
console.log(textStorate.getItem());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['Henry', 'Sports'];
// names.push('Manu');
// names.pop();
console.log(names);
