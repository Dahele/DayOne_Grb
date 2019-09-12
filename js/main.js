import Person from './modules/DataObject.js';


//this is an IIFE -> immediately invoked function Expression
//this is the javascript module pattern
( () => {
    console.log('fired!');

    console.log(Person);
})();