function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Programmer(name) {
    this.name = name;
}

Programmer.prototype.work = function() {
    console.log(`${this.name} is working on programing task.`);
};

function FrontEndProgrammer(name) {
    Programmer.call(this, name);
}

function BackendProgrammer(name) {
    Programmer.call(this, name);
}

extend (FrontEndProgrammer, Programmer);
extend (BackendProgrammer, Programmer);

FrontEndProgrammer.prototype.work = function() {
    console.log(`${this.name} is designing and coding the Frontend`);
}

BackendProgrammer.prototype.work = function() {
    console.log(`${this.name} is developing server-side logic`);
}

const steven = new FrontEndProgrammer("Steven");
const Johnny = new BackendProgrammer("Johnny");

const programmers = [
    steven,
    Johnny
]

for (let programmer of programmers) {
    programmer.work();
}