class Coder {

    private secondLang!: string;

    constructor(
        public readonly name: string,
        protected music: string,
        protected age: number,
        protected lang?: string 
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang ?? 'Typescript';
    }

    public getAge = (): number => {
        return this.age;
    }
}

const Dave = new Coder('Dave', 'Rock', 42);

console.log(Dave.getAge());
// Typescript dont like these, but will still work.
// console.log(Dave.age); 
// console.log(Dave.lang);

class WebDev extends Coder {
    constructor(
        public computer: string,
        public readonly name: string,
        protected music: string,
        protected age: number
    ) {
        super(name, music, age);

        this.computer = computer;
    }

    public getLang() {
        return `foobiz baz ${this.lang}`
    }
}

const XXXX = new WebDev('Mac', 'XXX', 'lofi', 25);

console.log(XXXX.getLang());
// Typescript dont like these, but will still work.
// console.log(XXXX.age);
// console.log(XXXX.lang);

interface Musician {
    name: string;
    instrument: string;
    play(action: string): string;
}

class Guitarist implements Musician {

    constructor(public name: string, public instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    public play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

const Hendrix = new Guitarist('Jimmy', ' guitar');

console.log(Hendrix.play('plays'));

// <----  new topic ---->
class Peeps {
    static count: number = 0;

    static getCount(): number {
        return Peeps.count;
    }

    public id: Number;

    constructor(public name: string) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}

const Johnie = new Peeps('Johnie');
const Johnny = new Peeps('Johnny');
const YesPapa = new Peeps('yesPapa');

console.log(Johnie.id);
console.log(Johnny.id);
console.log(YesPapa.id);

console.log(Peeps.count);


// <----------- getter and setters

class Bands {
    private dataState: string[];

    constructor() {
        this.dataState = [];
    }

    public get data(): string[] {
        return this.dataState;
    }

    public set data(value: string[]) 
    {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;

            return;
        } else throw new Error('Param is not array of strings');
    }
}

const myBands = new Bands();

myBands.data = ['Rammestein', 'Bullet for my valentine'];
console.log(myBands.data);

myBands.data = [...myBands.data, 'Whitelion'];
console.log(myBands.data);

// myBands.data = [...myBands.data, 6969]; wont work