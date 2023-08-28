"use strict";
let userInput;
let userString;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userString = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {}
}
const result = generateError('An error occured!', 500);
console.log(result);
