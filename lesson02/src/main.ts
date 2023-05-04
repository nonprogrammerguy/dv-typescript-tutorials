// typescript infers, on vars with no type declaration.
// Intellisense will help you with that.

let myName: string;

let meaningOfLyf: number;

let isLoading: boolean;

let album: string | number;

myName = 'Sherlock';

meaningOfLyf = 69;

isLoading = false;

album = 1987;

const sum = (a: number, b: number): number => {
    return a + b;
}

let postId: string | number; // 1 or '1'

let isActive: number | boolean; // false | 0

let re: RegExp = /\w+/g;