// break use korle condition ar ste match korle break kore ager gulo print korbe.
const num = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if(element > 5){
        break;
    }
    console.log(num[i]);
}


// continue use korle condition e match korle ignore kore baki gulo print korbe.
const remixNum = [1, -2, 3, -4, -6, 5, -7, 8, 9];
for (let i = 0; i < remixNum.length; i++) {
    const element = remixNum[i];
    if(element < 0){
        continue;
    }
    console.log(element);
}