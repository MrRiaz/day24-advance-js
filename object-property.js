const student = [
    {id: 21, name: 'Sakib Khan'},
    {id: 31, name: 'Salman Khan'},
    {id: 41, name: 'Mahiya'},
    {id: 71, name: 'Deepjol'}
]

const names = student.map(s => s.name);
console.log(names);

const ids = student.map(s => s.id);
console.log(ids);

const bigger = student.filter(s => s.id > 40);
console.log(bigger);

const biggerOne = student.find(s => s.id > 40);
console.log(biggerOne);



// const student = [
//     {id: 21, name: 'Sakib Khan'},
//     {id: 31, name: 'Salman Khan'},
//     {id: 41, name: 'Mahiya'},
//     {id: 71, name: 'Deepjol'}
// ]

// const output = [];       USE FOR LOOP for ACCESS & REARRAY ELEMENT.
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     // console.log(element);
//     output.push(element.name);
// }
// console.log(output);


// const names = student.map(function(element){     USE FUNCTION
//     return element.name;
// });