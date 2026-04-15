   const _language = Symbol();
   
   class Programmer {
        constructor(name, language) {
            this[_language] = language;
        }
   }

   const programmer = new Programmer("Steven", "JavaScript");

   console.log(programmer._language);

   console.log(Object.getOwnPropertySymbols(programmer));
   const languageSymbol = Object.getOwnPropertySymbols(programmer)[0];

   console.log(programmer[languageSymbol]);