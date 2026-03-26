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