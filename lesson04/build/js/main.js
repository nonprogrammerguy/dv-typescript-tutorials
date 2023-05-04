"use strict";
let strArr = ['apple', 'banana'];
let guitarArr = ['Les Paul', 'Strat', 5150];
let mixedData = ['evh', 1897, true];
strArr[0] = 'test';
strArr.push('1234');
guitarArr[0] = '1234';
guitarArr.unshift('1');
guitarArr = strArr; // valid, guitarArr have mixed type
// strArr = guitarArr, invalid strArr only accepts elements with string
mixedData = guitarArr; // valid
// guitarArr = mixedData invalid.
// Tuple.
let myTuple = ['Jordan', 1995, false]; // valid
// let myTuple2: [string, number, boolean] = [1995, false, 'Jordan'] -> invalid.
// let var1: typeof myTuple = ['Jordan', 1995, false];
let mixed = ['John', 1, false];
myTuple[1] = 42;
// Objects
let myObj = {};
myObj = [];
console.log('>>>>', myObj);
myObj = myTuple;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: 12
};
let evh = {
    name: 'eddi van halen',
    active: false,
    albums: [
        1987,
        'Test',
        // false -> invalid
    ]
};
let jp = {
    name: 'eddi van halen',
    albums: [
        1990,
        'Test',
    ]
};
// evh.years = 40 Invalid, props does not exists on GuitaristType
// evh = jp -> still valid
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
// with interface
const greetGuitarist1 = (guitarist) => {
    var _a;
    // return `Hello ${guitarist.name.toLowerCase()}!`; will throw an error
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toLowerCase()}!`; // or use if else
};
//ENUMS
// Unlike most typescript features, enums are not a type-level addition to Javascript 
// but something added to the language at runtime.
// will log position by default but with U = 1 it will just iterate.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
