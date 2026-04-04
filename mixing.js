function mixing(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log(`${this.name} is eating.`);
    }
};

const canWalk = {
    walk: function() {
        console.log(`${this.name} is walking.`);
    }
}

const canCode = {
    code: function() {
        console.log(`${this.name} is coding.`)
    }
};

function Programmer(name) {
    this.name = name;
    this.hunger = 20;
}

// Object.assign(Programmer.prototype, canEat, canWalk, canCode)


const programmer = new Programmer("Steven");
mixing (programmer, canEat, canWalk, canCode);
console.log(programmer);

programmer.eat();
programmer.walk();
programmer.code();