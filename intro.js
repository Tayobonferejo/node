let programmer = {
	name: "Steven",
	preferredLanguage: "JavaScript",
	writeCode: function() {
		console.log(`${this.name} writes ${this.preferredLanguage} code.`);
		},
	drinkCoffee() {
		console.log(`${this.name} drinks coffee.`);
		}
	};

function createProgrammer (name, preferredLanguage) {
	return {
		name,
		preferredLanguage,
		writeCode() {
			console.log(`${this.name} write ${preferredLanguage} code.`);
		},
		
		drinkCoffee() {
			consolo.log(`${this.name} drinks coffee.`);
		}
	}
}

const newProgrammer = createProgrammer("Alice", "JavaScript");

newProgrammer.writeCode();

let groceryListItem = {
		name: "Apples",
		quantity: 4,
		display: function() {
			console.log(`${this.quantity} x ${this.name}`);
		}
	};

function createGrocery (name, quantity) {
		return{
			name,
			quantity,
			display: function() {
				console.log(`${this.quantity} x ${this.name}`);	
			}

		}
	}

const newGrocery = createGrocery("Apples", 4);

function Programmer(name, preferredLanguage) {
	this.name = name;
	this.preferredLanguage = preferredLanguage;
	this.writeCode = function() {
			console.log(`${this.name} writes ${this.preferredLanguage} code.`);
		}
	this.drinksCoffee = function() {
		console.log(`${this.name} drinks coffee.`);
	};

}

const newProgram = new Programmer("Alice", "Javascript");

function GroceryItem (name, quantity) {
	this.name = name;
	this.quantity = quantity;
	this.display = function() {
		console.log(`${this.quantity} x ${this.name}`);
	};
}

const newGroceryItem = new GroceryItem("John", 4);

function calculatePrice( groceryItem, price) {
        return (
            groceryItem.quantity * price
        );
    }

    const performCalculation = calculatePrice;

    console.log(performCalculation(newGroceryItem, 23));

	newGroceryItem.grocerySle = "produce";

// console.log(newGroceryItem);



// for (const key in newGroceryItem){
// 	console.log(key);
// }

const values = Object.values(newGroceryItem);

for ( const value of values) {
	console.log(value);
}

const keys = Object.values(newGroceryItem); 

for (const value of keys) {
	console.log(keys);
}

const entries = Object.entries(newGroceryItem);

for( const entry of entries) {
	console.log(`key: ${entry[0]} => Value: ${entry[0]}`);
}