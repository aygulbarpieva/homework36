// 1)

// for (let i = 0; i < 3; i++) {
//     alert(`number ${i}!`);
// }

let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}


// 2)

let arr = [1, 3, 4, 6, 9, 11, 24, 17];
for (let i = 1; i <= 3; i++) {
    if (i % 2 === 1)
        console.log(i);
}
for (let i = 4; i <= 6; i++) {
    if (i % 2 === 0)
        console.log(i);
}
for (let i = 9; i <= 11; i++) {
    if (i % 2 === 1)
        console.log(i);
}
for (let i = 24; i <= 24; i++) 
console.log(i);
for (let i = 17; i <= 17; i++)
console.log(i);


// 3)

let arr = [1, 3, 4, 6, 9, 11, 24, 17];
for (i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}


// 4)

let num = 3;
while(num <= 6){
    console.log(num);
    num++;
}


// 5)

let i = [1, 2, 5, 11, 12];
for (i = 1; i <= 3; i++) {
    if (i % 2 === 0)
    console.log('Первое четное число в массиве:', i);
}


// 6)

const array = [];
for (let i = 1; i <= 9; i++) {
    if (i !== 5) {
        console.log(i);
    }
}

















