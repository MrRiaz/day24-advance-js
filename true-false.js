//Falsy
// false
// 0
// ""
// Undefined
// null
// NaN

//Truthy
// any kind of string.
// ' '  even white space qurtation
// '0'
// 'false'
// {}
// []

const name = 10;
if(name || name == 0){      // normally 0 false, kintu == 0 condition dile true hoy.
    console.log("Condition is true")
}
else{
    console.log("Condition is false");
}


// null & undefined both are false value.
let name = null;
if(name){
    console.log("Condition is true")
}
else{
    console.log("Condition is false");
}