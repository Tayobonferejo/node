function add(num , num2) {
    return num + num2;
}

const n = add;
console.log(n(2, 2));

const ProgrammerFunct = new Function("name", `
    this.name = name;
    this.writeCode = function() {
        console.log("Code in Javascript");
    }
    
    `);

    const programmer = new ProgrammerFunct("Steven");

    programmer.writeCode();

    function calculatePrice( groceryItem, price) {
        return (
            console.log(`${groceryItem} x ${price}`)
        );
    }

    const performCalculation = calculatePrice;

    performCalculation("Rice", 23);

    let a = 50;
    let b = a;

    a = 20;
    b = a;
    console.log(a);
    console.log(b);

    a = { value: 20};
    b = a;


    a.value = 70;


    const person = {
        name: "steven"
    };

    console.log(person);

    person.favouriteFood = "tacos";
    console.log(person); 

    person["favouriteIceCream"] = "chocolate";

    console.log(person);

    delete person.favouriteIceCream;
    console.log(person);

    person.eat = function() {
        console.log(`${this.name} eats ${this.favouriteFood}`);
    }
    
    person.eat();
