const nums = [1, 5, 7, 6, 23, 89, 75, 32];

//Program to square each element of array.
const res = nums.map( (n) => { return n**2 } );

console.log(res);

console.log('-------------------------');

//Program to divide each element of array by 2.
const res2 = nums.map( (n) =>  { return n/2} );

console.log(res2);

console.log('-------------------------');


//Program to convert each element of array to integer.
const prices = ['$43.99', '$9.20', '$992.50', '$34.999'];

const res3 = prices.map( (p) => { return parseInt(p.slice(1)) } );

console.log(res3);

console.log('-------------------------');

//Even divide by 2 and Odd Multiple  by 3.

const res4 = nums.map( (n) => { return n%2==0 ? n/2 : n*3});
console.log(res4);

const filterArr1 = nums.filter( (a) => {return a%2==0} );
console.log(filterArr1);

console.log('-------------------------');

//Program to filter out prices greater then 500.
//Filter out prices which is not a perfect square.
const prices2 = [345, 299, 788, 1024, 99, 291, 124, 3821, 800];

const filterprices = prices2.filter( (p) => {return p<500} );
console.log(filterprices);

const filterprices2 = prices2.filter( (p) => {return Math.sqrt(p)%1==0} );
console.log(filterprices2);


