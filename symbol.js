class GroceryItem {

    #name;
    #quantity;
    constructor(name, quantity) {
        this.#name = name;
        this.#quantity = quantity
    
    }
    
    displayItem() {
        return `Item: ${this.#name}, quantity : ${this.#quantity}`
    }

}
  
class GroceryList {
    #items;
    constructor() {
        this.#items = []
    }

    addItem(name, quantity) {
        const item = new GroceryItem(name, quantity)
        this.#items.push(item);
    }

    removeItem(name) {
        this.#items = this.#items.filter(item =>  !item.displayItem().includes(`Item: ${name},`));
        // this.#items = this.#items.filter(item => filter.displayItem().includes(`item: ${item.name},`));

    }
 
    displayList() {
        return this.#items.map(item => item.displayItem()).join(`\n`);
    }
}

const groceryList = new GroceryList();

groceryList.addItem("Banana", 5);
groceryList.addItem("Peach", 9);
console.log(groceryList.displayList());
groceryList.removeItem("Banana");
console.log(groceryList.displayList());
 