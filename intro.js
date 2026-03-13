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


let groceryListItem = {
		name: "Apples",
		quantity: 4,
		display: function() {
			console.log(`${this.quantity} x ${this.name}`);
		}
	};

groceryListItem.display();
