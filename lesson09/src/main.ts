// Utility types

// Partial
interface Assignment { 
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (
    assign: Assignment,
    propsToUpdate: Partial<Assignment>
): Assignment => {
 return { ...assign, ...propsToUpdate};
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0
}

console.log(updateAssignment(assign1, {grade: 95}));

const assignGraded: Assignment = updateAssignment(assign1, {grade: 95});

// Required & readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // etc etc
    return assign;
}

// cant override props
const assignVerified: Readonly<Assignment> = {
    ...assignGraded,
    verified: true
};
// assignVerified.grade = 99; wont work as assignVerified only has readonly

recordAssignment({...assignGraded, verified: true});

// Record
const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
}

type Students = 'Sara' | 'Kelly';

type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U';

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "A",
    // XXX : "V" wont work
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Sara: {assign1: 85, assign2: 93},
    Kelly: {assign1: 99, assign2: 89},
}

// Pick and Omit
type AssignResult = Pick<Assignment, 'studentId' | 'grade'>;

const score: AssignResult = {
    studentId: "k123",
    grade: 89
}

type AssignPreview = Omit<Assignment, 'grade' | 'verified'>;

const preview: AssignPreview = {
    studentId: "k123",
    title: "Final Project",
    // grade: 123, wont work
}

// Exclude and Extract | wont work with interface, will work on string literals union types.
type adjustedGrade = Exclude<LetterGrades, 'U'>;

type highGrades = Extract<LetterGrades, 'A' | 'B'>;

// Non nullable
type  AllPossibleGrades = 'Dave'| 'John'| null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades> // Dave and John

// ReturnType

// type newAssign = {title: string, points: number}; #1

// const createNewAssign = (title: string, points: number): newAssign => {
//     return {title, points};
// }

const createNewAssign = (title: string, points: number) => {
    return {title, points};
}

type NewAssign = ReturnType<typeof createNewAssign>; // same as #1

const tsAssign: NewAssign = createNewAssign('Utility types', 100);
console.log('>>>', tsAssign);

// Parameters
type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ['Generics', 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);

console.log(tsAssign2);

// Awaited - helps us with the ReturnType of a Promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

const fetchUser = async (): Promise<User[]> => {
    const data = await fetch ('http://jsonplaceholder.typicode.com/users')
        .then(res => {
            return res.json();
        }).catch(err => {
            if (err instanceof  Error) console.log(err.message);
        });

    return data;
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUser>>;

fetchUser().then(users => console.log(users));