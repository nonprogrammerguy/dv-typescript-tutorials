"use strict";
//type assertion
let a = 'hello';
let b = a; // less specific type
let c = a; // more specific
// cannot be used in react;
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat'); // type assetion.
// be careful, TS sees no problem, but a string is returned.
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string 
10; // double casting, double assertion, overrules typescript
// The DOM
const img = document.querySelector('img'); // or document.querySelector('img')!
const myImg = document.getElementById('#myId');
const nextImg = document.getElementById('#myId');
img.src;
myImg.src;
