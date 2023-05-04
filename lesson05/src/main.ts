//type assertion

type One = string;
type Two = string | number;
type Three = 'hello';

let a: One = 'hello';
let b = a as Two; // less specific type
let c = a as Three; // more specific

// cannot be used in react;
let d = <One>'world';
let e = <string | number> 'world';

const addOrConcat = (a: number, b: number, c: 'add'| 'concat'): number | string => {
    if (c === 'add') {
        return a + b;
    }

    return '' + a + b;
}

let myVal: string = addOrConcat(2, 2, 'concat') as string; // type assetion.

// be careful, TS sees no problem, but a string is returned.
let nextVal: number = addOrConcat(2, 2, 'concat') as number;

// 10 as string 
(10 as unknown) as string // double casting, double assertion, overrules typescript

// The DOM
const img = document.querySelector('img') as HTMLImageElement; // or document.querySelector('img')!

const myImg = document.getElementById('#myId') as HTMLImageElement;

const nextImg = <HTMLImageElement>document.getElementById('#myId');

img.src
myImg.src