"use strict";
class Coder {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.getAge = () => {
            return this.age;
        };
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang !== null && lang !== void 0 ? lang : 'Typescript';
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge());
// Typescript dont like these, but will still work.
// console.log(Dave.age); 
// console.log(Dave.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.name = name;
        this.music = music;
        this.age = age;
        this.computer = computer;
    }
    getLang() {
        return `foobiz baz ${this.lang}`;
    }
}
const XXXX = new WebDev('Mac', 'XXX', 'lofi', 25);
console.log(XXXX.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Hendrix = new Guitarist('Jimmy', ' guitar');
console.log(Hendrix.play('plays'));
// <----  new topic ---->
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Johnie = new Peeps('Johnie');
const Johnny = new Peeps('Johnny');
const YesPapa = new Peeps('yesPapa');
console.log(Johnie.id);
console.log(Johnny.id);
console.log(YesPapa.id);
console.log(Peeps.count);
// <----------- getter and setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not array of strings');
    }
}
const myBands = new Bands();
myBands.data = ['Rammestein', 'Bullet for my valentine'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'Whitelion'];
console.log(myBands.data);
// myBands.data = [...myBands.data, 6969]; wont work
