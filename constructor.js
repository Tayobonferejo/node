function Programmer (name, specialisation) {
    this.name = name;
    this.specialisation = specialisation
}

function FrontEndProgrammer(name, specialisation, perferredFramework) {
    Programmer.call(this, name, specialisation);
    this.perferredFramework = perferredFramework;
}

function BackendProgrammer(name, specialisation) {
    Programmer.call(this, name, specialisation);
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

extend(FrontEndProgrammer, Programmer);
extend(BackendProgrammer,Programmer);

Programmer.prototype.code = function() {
    console.log(`${this.name} starts coding.`);
}
const steven = new FrontEndProgrammer("Steven", "Front-end", "React");

const johnny = new BackendProgrammer("Johnny", "Backend");
FrontEndProgrammer.prototype.code = function() {
    Programmer.prototype.code.call(this);
    console.log(`${this.name} is coding in  HTML/CSS/Javascript`)
}
steven.code();
johnny.code();