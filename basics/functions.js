"use strict";
function add(n1, n2) {
    return n1 + n2;
}
const addNumberToString = add(50, 32);
console.log(addNumberToString);
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
let combinedValue;
combinedValue = add;
// combinedValue = printResult;
// combinedValue = 5;
console.log(combinedValue(8, 8));
// let someValue: undefined;
addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
});
function sendReq(data, cb) {
    return cb({ data: "Hello World" });
}
sendReq("Send Here!", (response) => {
    console.log(response);
    return true;
});
