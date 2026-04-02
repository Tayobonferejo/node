function Programmer (name, specialiation) {
    this.name = name;
    this.specialisation = specialiation
}

function FrontEndProgrammer(name, specialisation, perferredFramework) {
    Programmer.call(this, name, specialiation);
    this.perferredFramework = perferredFramework;
}

const steven = new FrontEndProgrammer("Steven", "Front-end", "React");

console.log(steven.name);
console.log(steven.specialisation);
console.log(steven.perferredFramework);