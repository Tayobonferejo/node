function Programmer(name) {
    this.name = name;
}
//     this.code = function() {
//         console.log(`${this.name} starts coding.`);
//     };
//     this.debug = function() {
//         console.log(`${this.name} is debugging.`);
//     };
//     this.meeting = function() {
//         console.log(`${this.name} is attending meetings.`);
//     };
// }

Programmer.prototype.code = function() {
    console.log(`${this.name} starts coding.`);
};

Programmer.prototype.debug = function() {
    console.log(`${this.name} is debugging.`);
}

Programmer.prototype.meeting = function() {
    console.log(`${this.name} is attending meeting`);
}

const John = new Programmer("John");
const steven = new Programmer("Steven");

John.code();
steven.code();

console.log(John.code === steven.code);