let strArr = ['apple', 'banana'];

let guitarArr: (string | number)[] = ['Les Paul', 'Strat', 5150];

let mixedData = ['evh', 1897, true];

strArr[0] = 'test';
strArr.push('1234');

guitarArr[0] = '1234';
guitarArr.unshift('1');

guitarArr = strArr // valid, guitarArr have mixed type
// strArr = guitarArr, invalid strArr only accepts elements with string

mixedData = guitarArr; // valid
// guitarArr = mixedData invalid.

// Tuple.
let myTuple: [string, number, boolean] = ['Jordan', 1995, false] // valid
// let myTuple2: [string, number, boolean] = [1995, false, 'Jordan'] -> invalid.

// let var1: typeof myTuple = ['Jordan', 1995, false];

let mixed = ['John', 1, false];

myTuple[1] = 42;

// Objects

let myObj: Object = {};
myObj = [];

console.log('>>>>', myObj);

myObj = myTuple;
myObj = {};

const exampleObj = {
    prop1: 'Dave',
    prop2: 12
};

// exampleObj.prop2 = '44'; invalid
type Guitarist  = {
  name : string,
  active?: boolean, // optional prop
  albums: (string | number) []
}
// works same with Guitarist
interface GuitaristInterface {
    name? : string,
    active?: boolean,
    albums: (string | number) []
}

let evh: Guitarist = {
    name : 'eddi van halen',
    active: false,
    albums: [
        1987,
        'Test',
        // false -> invalid
    ]
};

let jp: Guitarist  = {
    name : 'eddi van halen',
    albums: [
        1990,
        'Test',
    ]
}

// evh.years = 40 Invalid, props does not exists on GuitaristType
// evh = jp -> still valid

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`;
}

// with interface
const greetGuitarist1 = (guitarist: GuitaristInterface) => {
    // return `Hello ${guitarist.name.toLowerCase()}!`; will throw an error
    return `Hello ${guitarist.name?.toLowerCase()}!`; // or use if else
}

//ENUMS
// Unlike most typescript features, enums are not a type-level addition to Javascript 
// but something added to the language at runtime.


// will log position by default but with U = 1 it will just iterate.
enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}
