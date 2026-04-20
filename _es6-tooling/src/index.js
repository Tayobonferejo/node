class Programmer {
    role = "developer";
    #experience;

    constructor(name, technology, experience) {
        this.name = name;
        this.technology = technology;
        this.#experience = experience;
    }

    develop() {
        console.log(`${this.name} develops software using ${this.technology} with ${this.#experience}`)
    }

    getExperience() {
        return this.#experience;
    }
}

const dev = new Programmer("Steven", 20);
dev.develop()