let person = {
    name: "Steven"
};

// console.log(person);

// for (let value in person) {
//     console.log(person[value]);
// }

Object.defineProperty(person, "name", {
    writable: false,
    enumerable: false,
    configurable: true
});

for (let key in person) {
    console.log(key);
}

// console.log(Object.keys(person));
// let objectBase = Object.getPrototypeOf(person);
// const propertyDescritptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
// console.log(propertyDescritptor);


function Circle () {
}

let obj = {};

console.log(obj.__proto__);
console.log(Object.prototype);


function Programmer(name, preferredLanguage) {
    this.name  = name;
    this.preferredLanguage = preferredLanguage;
}

Programmer.prototype.writeCode = function() {
    console.log(`${this.name} write code in ${this.preferredLanguage}`);
};

Programmer.prototype.toString = function () {
    return `Programmer: ${this.name}, Language: ${this.preferredLanguage}`;
};

const jsProgrammer = new Programmer("John", "JavaScript");
jsProgrammer.writeCode();
console.log(jsProgrammer);

for (let key in Programmer) {
    console.log(key);
}

console.log(jsProgrammer.hasOwnProperty("name"));