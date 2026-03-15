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