let user = {
    name: "Steven",
    surname: "Garcia",
    email: "steven@stevencodecraft.com",
    isOnline: true,

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    login() {
        console.log(`${this.fullName} logged in`)
    },

    logout() {
        console.log(`${this.fullName} logged out.`);
    }
};

let admin = {
    __proto__: user,
    isAdmin: true,
    manageUser() {
        console.log(`${this.fullName} is managing users.`);
    }
};

let guest = {
    __proto__: user,
    isGuest: true,
    browseContent() {
        console.log(`${this.fullName} is browsing content.`);
    }
};

let superAdmin = {
    __proto__: admin,
    isSuperAdmins() {
        console.log(`${this.fullName} is managing admins.`);
    }
}

// admin.fullName = "Bruce Wayne";
// console.log(admin.fullName);
// console.log(user.fullName);

// for (let key in admin) {
//     console.log(key);
// }

// console.log(Object.keys(admin));

const programmerPrototype = {
    writeCode: function() {
        console.log(`Writing code in ${this.preferredLanguage}`);
    },
    drinkCoffee: function() {
        console.log("Drinking coffee");
    }
};

function Programmer(name, preferredLanguage) {
    let privateName = name; 
    this.preferredLanguage = preferredLanguage

    Object.defineProperties(this, {
        "name" : {
            get: function() {
                return privateName;
            },
            set: function(newName) {
                privateName = newName
            }
        }
    });

    Object.setPrototypeOf(this, programmerPrototype);


}

const jsProgrammer = new Programmer("Alice", "JavaScript");

jsProgrammer.writeCode();
jsProgrammer.drinkCoffee();
console.log(jsProgrammer.name);
jsProgrammer.name = "Johnny";
console.log(jsProgrammer.name);