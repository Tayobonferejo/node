let user = {
    name: "Steven",
    surname: "Garcia",
    email: "steven@stevencodecraft.com",
    isOnline: true,

    set fullName(value) {
        [this.name, this.surname] = value.split("");
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