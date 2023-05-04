// Type Aliases
type StringNumberType = string | number;

type StringNumberArrayType =  (string | number)[];

type GuitaristType = {
    name? : string,
    active?: boolean,
    albums: (string | number) []
}

type UsetIdType = StringNumberType;

// interface PostId = StringNumberType; Invalid, interfaces are more of a class and type is an alias for typescript types.


// Literal types

let myName: 'dafaq'; // like const;
// myName = 'John' Invalid;
let userName : 'A' | 'B' | 'C';
// userName = 'A' Valid
// userName = 'P' Invalid

// Functions
const add = (a: number, b: number): number => {
    return a + b;
}

const logMsg = (msg: any): void => {
    console.log('>>>>>', msg);
}

let subtract = function (c: number, d: number): number {
    return c - d;
}

// type mathFunction = (a: number, b: number) => number;
interface mathFunctionInterface { 
    (a: number, b: number): number
};

let multiply: mathFunctionInterface = function(c, d) {
    return c * d;
}

// optional parameter
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }

    return a + b;
}

logMsg(addAll(2, 3, 2)); // 7
logMsg(addAll(2, 3)); // 5

const sumAll = (a: number, b: number, c: number): number => {
    return a + b + c;
}

logMsg(sumAll(2, 3, 2)) // 7

// Rest Parameters
const total = (a:number, ...numberss : number[]): number => {
    return a + numberss.reduce((prev: number, curr: number): number => prev + curr);
}

logMsg(total(1,2,3));

const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}

// infinite loop,
const infinite = () => {
    let i: number = 1;

    while (true) {
        i++;

        // if (i > 100) break; this will change the return type to void.
    }
}

// typeguard
const isNumber = (value: any): boolean => {
    return typeof value === 'number';
}
// use of nevertype
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string';

    if (isNumber(value)) return 'number';

    return createError('yeah boi');
}