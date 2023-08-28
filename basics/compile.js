"use strict";
const button = document.querySelector("button");
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
let appId = 'abc';
function clickHandler(message) {
    console.log("Clicked!" + message);
}
if (button) {
    button.addEventListener("click", clickHandler.bind(null, 'Youre welcome'));
}
/// add comments
