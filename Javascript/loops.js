// for(let i=0; i<=10; i++){
//     console.log(i);
// };

// console.log('-------------')

// for(let i=10; i>=0; i--){
//     console.log(i);
// };

// console.log('-------------')

// //Wap to print all numbers disvisible by 7 & 11 in range of 50-1000;

// for(let i=50; i<=1000; i++){
//     if(i%7==0 && i%11==0)
//         console.log(i)
//     }

// console.log('-------------')

// //program to check if a number is a perfect square. Good question!

// let n=25;
// const sqrt = n**0.5;
// ans = parseInt(sqrt); 
// if(sqrt == ans){
//     console.log('It is a perfect square');
// }
// else{
//     console.log('It is not a perfect square');
// }

// console.log('-------------')

// //while loop.
// let num=5;
// while(num<=20){
//     console.log(num);
//     num+=2;
// }

//WAP to reverse digits of a number

let n=123;
let d,rev=0;

while(n>0){
d=n%10;
rev=rev*10+d;
n=parseInt(n/10);
}
console.log(rev);
