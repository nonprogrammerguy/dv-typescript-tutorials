"use strict";
// Index signatures
const todaysTransaction = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 69
};
console.log(todaysTransaction.Pizza);
let prop = 'Pizza';
// console.log(todaysTransaction[[prop]])
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransaction));
// todaysTransaction.Pizza = 40; typescript only allow reading.
console.log(todaysTransaction['Dave']); // returns undefine, but allowed by TS
const student = {
    name: "Dog",
    GPA: 4.1,
    classes: [100, 200]
};
// console.log(student.test); allowed by TS because of index signatures
for (const key in student) {
    console.log(`${key}: ${student[key]}`); // TS create uniontype of StudentInterface keys.
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
const MonthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in MonthlyIncomes) {
    // console.log(MonthlyIncomes[revenue]) wont work
    console.log(MonthlyIncomes[revenue]);
}
