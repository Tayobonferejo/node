let numbers = [2, 3, 4, 5, 6];

for (const element of numbers)
    console.log(element); 

const dog = {
    name: "Max",
    age: 5,
    eyeColor: "blue"
};

for (const key in dog)
    console.log(dog[key]);

const keys = Object.keys(dog);

for (const key of keys)
    console.log(key);

const values = Object.values(dog);

for (const value of values)
    {
      console.log(value);
    }

const entries = Object.entries(dog);

for (const entry of entries) {
    console.log(`key: ${entry[0]} => Value: ${entry[1]}`);
}