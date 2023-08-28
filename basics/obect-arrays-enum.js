"use strict";
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "henry",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.AUTHOR,
};
// person.role.push('admin');
// person.role[0] = 10;
// person.role[1] = "admin";
// person.role = [0, 'admin'];
// console.log(person.role);
console.log(person.name);
const favoriteActivities;
favoriteActivities = ["Sports"];
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // error
}
if (person.role === Role.AUTHOR) {
    console.log("is author");
    console.log(person.role);
}
