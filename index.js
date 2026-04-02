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

function FrontEndProgrammer(name) {
    Programmer.call(this,name);
}

function BackendProgrammer(name) {
    Programmer.call(this, name);
}

FrontEndProgrammer.prototype = Object.create(Programmer.prototype);

BackendProgrammer.prototype = Object.create(Programmer.prototype);

FrontEndProgrammer.prototype.constructor = FrontEndProgrammer;

BackendProgrammer.prototype.constructor = BackendProgrammer;

const joe = new FrontEndProgrammer("Joe");

joe.code();
joe.debug();
joe.meeting();

const jen = new BackendProgrammer("Jen");

jen.code();
jen.debug();
jen.meeting();  