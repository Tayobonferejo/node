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

programmer.writeCode();
