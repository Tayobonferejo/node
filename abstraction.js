function Programmer(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;

    // public method

    this.writeCode = function() {
        console.log(`${this.name} write ${this.preferredLanguage} code.`);
    }

    // private method

    const drinkCoffee = function() {
        console.log(`${this.name} drinks coffee.`);}.bind(this);

    // Public method

    this.startDay = function() {
        drinkCoffee();
    }
}

const programmer = new Programmer("Steven", "JavaScript");

programmer.writeCode();
// programmer.drinkCoffee();
programmer.startDay();


