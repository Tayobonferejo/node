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


function GroceryItem (name, quantity) {
	this.name = name;
	this.quantity = quantity;
	this.display = function() {
		console.log(`${this.quantity} x ${this.name}`);
	};
}

function GroceryList() {
    const items = [] ;// Private array to store items

    const calculateTotalQuantity = function() {
        return items.reduce((total, item) => total + item.quantity, 0);
    };

    this.addItem = function(name, quantity) {
        const item = new GroceryItem(name, quantity);

        items.push(item);
    }

    this.displayItems = function() {
        // items.forEach(item => item.display());

        for( let i = 0; i < items.length; i++) {
            items[i].display()
        }
        console.log(items);
    }

    this.getTotalQuantity = function() {
        return calculateTotalQuantity();
    }
}

const myList = new GroceryList();
myList.addItem("Banana", 5);
myList.addItem("Carrot", 3);
myList.displayItems();

console.log(`Total quantity:  ${myList.getTotalQuantity()}`)