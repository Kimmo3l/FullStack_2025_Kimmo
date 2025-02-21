const msg = 'Hello, Node.js!';
console.log(msg)

// Terminalin komennolla "node WS02a/app" console tulostaa tekstin "Hello, Node.js!"

const maths = require('./maths');
console.log("Sum is " +maths.add(5,5));
console.log("Subtraction is " +maths.subtract(10,5));

// Laskuri laskee 5+5 sekä 10-5 laskut

const stringUtils = require('./stringUtils');
console.log(stringUtils.reverseString("Hello World!"));
console.log(stringUtils.upperCase("Hello World!"));

// Teksti Hello World! tulostuu ensin käänteisessä järjestyksessä ja toisessa tulostuksessa isoilla kirjaimilla

const dateUtils = require('./dateUtils');
console.log(dateUtils.getCurrentDate);
console.log(dateUtils.formatDate);

