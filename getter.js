function Programmer(name, preferredLanguage) {
    // Private property

    let privateName = name;

    Object.defineProperties(this, {
        "name" : {
            get: function() {
                return privateName;
            },
            set: function(newName) {
            if(!newName) {
                console.log(`Name cannot be empty`);
                return;
            }
            else {
                privateName = newName;
            }
         }

        }

    })

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

console.log(programmer.name);

programmer.name = '';
console.log(programmer.name);