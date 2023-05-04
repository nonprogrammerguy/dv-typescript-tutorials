// Index signatures

// interface TransactionObj {
//     readonly [index: string]: number,
// }

// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number
// }

interface TransactionObj {
    readonly [index: string]: number,
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransaction: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 69
}

console.log(todaysTransaction.Pizza);

let prop: string = 'Pizza';
// console.log(todaysTransaction[[prop]])

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;

    for (const transaction in transactions) {
        total += transactions[transaction];
    }

    return total;
} 

console.log(todaysNet(todaysTransaction));
// todaysTransaction.Pizza = 40; typescript only allow reading.

console.log(todaysTransaction['Dave']) // returns undefine, but allowed by TS

// <-------------- next ------------------>

interface StudentInterface {
    // [key:string]: string | number | number[] | undefined,
    name: string,
    GPA: number,
    classes?: number[]
}

const student: StudentInterface = {
    name: "Dog",
    GPA: 4.1,
    classes: [100, 200]
}

// console.log(student.test); allowed by TS because of index signatures

for (const key in student) {
    console.log(`${key}: ${student[key as keyof StudentInterface]}`) // TS create uniontype of StudentInterface keys.
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: StudentInterface, key: keyof StudentInterface) => {
    console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student, 'GPA')

// <-------------- anada wan -------------------->

// interface Incomes {
//     [key: string]: number
//     Pizza: string // this cannot work on Streams
// }

type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams, number>

const MonthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in MonthlyIncomes) {
    // console.log(MonthlyIncomes[revenue]) wont work
    console.log(MonthlyIncomes[revenue as keyof Incomes]);
}