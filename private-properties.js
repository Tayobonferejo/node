function example() {
    const num = 5;

    return function logNum() {
        console.log(num);
    }

}

example();

const innerFunction = example();


function makeFunction() {
    let privateNum = 0;

    function privateIncrement() {
        privateNum++;
    }

    return {
        logNum: () => console.log(privateNum),
        increment: () => {
            privateIncrement();
            console.log("incremented");
        }
    }
}

const { logNum, increment } = makeFunction();


function Programmer (name, preferredLanguage) {
    
    // Private property 
    let privateName = name;

    // public property
    this.preferredLanguage = preferredLanguage;

    // Public method
    this.writeCode = function () {
        console.log (`Code in ${this.preferredLanguage}`);

    }

    // Private method
    let drinkCoffee = function() {
        console.log("Gulp...");
    }

    // public method that uses a closure

    this.startDay = function() {
        drinkCoffee();
    }
}

const programmer = new Programmer("James", "JavaScript");

programmer.writeCode();
programmer.startDay()