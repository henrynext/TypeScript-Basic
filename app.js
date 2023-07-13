var userInput;
var userString;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userString = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error occured!', 500);
console.log(result);
