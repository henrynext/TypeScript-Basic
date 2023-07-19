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
