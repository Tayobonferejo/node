function Programmer(name, preferredLanguage) {
    // Private property

    let privateName = name;

    // public property
    this.preferredLanguage = preferredLanguage;

    // Public property

    this.writeCode = function() {
        console.log(`${privateName} codes in ${this.preferredLanguage}`);
    }

    // Private method

    let drinkCoffee = function() {
        console.log("Gulp...");
    }

    // public method that uses a closure

    this.startDay = function () {
        drinkCoffee();
    }

}

const programmer = new Programmer("Butley" , "Python");

programmer.writeCode();
programmer.startDay();