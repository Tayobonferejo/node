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
        console.log (` ${privateName} Codes in ${this.preferredLanguage}`);

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
programmer.startDay();

function BankAccount (initialBalance) {
    let accountBalance = 0;
    
    const validate = (amount) => {
        return typeof(amount) === "number" && amount > 0;
    }


    this.deposit = function (amount) {

        if(validate(amount)) {
            accountBalance = accountBalance + amount;
            console.log(` The amount "$${amount}" was deposited into your account. `)
        }
        else {
            console.log("Invalid deposit amount")
        }

    }

    this.withdraw = function (amount) {

        if (validate(amount)) {
            if(amount <= accountBalance) {
                accountBalance = accountBalance - amount;
                console.log(` The amount "$${amount}" was withdrawn into your account.`);
            }
            else {
                console.log("Insufficient funds");
            }
        }

        else {
            console.log("Invalid withdraw amount");
        }

    }

    this.getBalance = function () {
        console.log(`Your Total balance $${accountBalance}`);
    }
}

const bankAccount = new BankAccount(900);

bankAccount.deposit("400");
bankAccount.withdraw(800);
bankAccount.getBalance();