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
var person = {
    name: "maximilian",
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
var favoriteActivities;
favoriteActivities = ["Sports"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // error
}
if (person.role === Role.AUTHOR) {
    console.log("is author");
    console.log(person.role);
}
