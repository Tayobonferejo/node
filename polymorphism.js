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

function Employee (rname) {
    this.name = rname
}

function ProgrammerEmploy (rname) {
    Employee.call(this, rname);
    Object.assign(this, canCode, canReview);
}

const canCode = {
    code() {
        console.log(`${this.name} is coding`);
    }
};

const canReview = {
    review() {
        console.log(`${this.name} reviewing is coding`);
    }
};

function Manager(rname) {
    Employee.call(this. rname);
}

const steve = new ProgrammerEmploy("Rondy");
steve.code();
steve.review();


