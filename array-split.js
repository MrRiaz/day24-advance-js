const num = [1,2,3,4,5,6,7,8,9];
const part = num.slice(3, 6);    // slice shudu value access kore kintu array te sob theke jai
console.log(part);

const removed = num.splice(2, 4, 77);
console.log(removed);       // splice array tke value pithok kore, tobe start, deleteCount ar por  add o kora jai.
console.log(num);


const together = num.join('');    // empty quotation dile value string hoye print korbe, white space dile space diye print korbe, r kono string dile value ar por string bose print korbe.
console.log(together);