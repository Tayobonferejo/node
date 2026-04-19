// const _language = new WeakMap();
// const _work = new WeakMap();

// class Programmer {
//     constructor(name, language) {
//         this.name = name;

//         _language.set(this, language);
//         _work.set(this, () => {
//             console.log(`${this.name} is coding in ${_language.get(this )}`)
//         })
//     }

//     code() {
//         _work.get(this)();
//     }
// }


const privateProps = new WeakMap();

class Programmer {
    constructor(name, language) {
        privateProps.set(this, {
            name: name,
            language: language,
            work: () => {console.log(`${privateProps.get(this).name} is  coding in  is  coding in ${privateProps.get(this).language}`)}
              
        });c
    }

    code() {
            privateProps.get(this).work();
    }
}
 const programmer = new Programmer("Steven", "JavaScript");
 programmer.code();