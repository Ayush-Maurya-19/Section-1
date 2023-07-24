console.log('Hello Javascript!!');

age = 22;
console.log(age);
console.log(typeof age);
fname = 'Ayush';
console.log(fname + ' age is ' + age);

isHungry = true;
console.log(typeof isHungry);

empty = null;
console.log(empty);

if(age >= 18){
    console.log('Your are eligible for DL');
    x = 'this should be global';
    // let y = 'this should be local';
    var z = 'this should be local';
    const pi = 3.14;
    console.log(pi);
}
else{
    console.log('You are not eligible for DL');
}

console.log(x)
console.log(z)


console.log(2 ** 5);
console.log(25 ** 0.5);









//node javascript/index.js
//node --watch javascript/index.js
// write cd to enter into the javascript folder and then directly use index.js file.