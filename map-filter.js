// const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output);


const numbers = [3, 4, 5, 6, 7, 8];

// function square(element){
//     return element * element;                    line---- 1
// }
//const result = numbers.map(square);               line---- 2
                                            // line 1 + 2 = 3. j kono akta use korlei hobe.
// const result = numbers.map(function(element){    line---- 3
//     return element * element;
// })

// const square = element => element * element;
// const square = x => x * x;

const result = numbers.map(x => x * x);
console.log(result);            // map index r array dibe.

const result2 = numbers.filter(x => x < 5);
console.log(result2);           // filter array dibe, condition e kno element na tkle [] dibe

const result3 = numbers.find(x => x > 5);
console.log(result3);           // find condition ar ste match kore just 1ta element dibe.