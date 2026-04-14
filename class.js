
class Programmer {
    constructor(name, preferredLanguage) {
        this.name = name;
        this.preferredLanguage = preferredLanguage;
    }

    code() {
        console.log(`${this.name} is coding in ${this.preferredLanguage}`);
    }

    static compareSkill(programmer2, programmer3) {
        return programmer2.preferredLanguage === programmer3;
    }
}

const dev = new Programmer("Mommy", "Node")
const dev2 = new Programmer("steven" , "springboot");

console.log(Programmer.compareSkill(dev, dev2))


const programmer = new Programmer("Steven", "JavaScript");
programmer.code();

class GroceryItem {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
        display () {
            console.log(`${this.name} * ${this.quantity}`)
        }

        static compareQuantity(GroceryItem2, GroceryItem3) {
             if(GroceryItem2.quantity > GroceryItem3.quantity) {
                console.log(`${GroceryItem2.name} has more quantity than ${GroceryItem3.name}`)
            }

            else if(GroceryItem2.quantity < GroceryItem3.quantity) {

                console.log(`${GroceryItem3.name} has more quantity than ${GroceryItem2.name}`)
            }

             else if (GroceryItem2.quantity === GroceryItem3.quantity) {
                console.log(`${GroceryItem2.name} is equal to ${GroceryItem3.name}`)
            }
        }
}

const GroceryItem2 = new GroceryItem("Pineapple", 6);

const GroceryItem3 = new GroceryItem("Orange", 6);

GroceryItem.compareQuantity(GroceryItem2, GroceryItem3);