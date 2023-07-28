//Add two numbers
function addNums(a, b){
    var c = a+b;
    console.log(c);
};

addNums(2, 2);
// console.log(c);

//Factorial
const factorial = function(n){
    let f=1;
    for(let i=2; i<=n; i++){
        f*= i;
    }
    console.log(f);
}
factorial(5);

//New method added in ES6

const calcPercent = (m1, m2, m3, m4, m5) => {
    const total = m1+m2+m3+m4+m5;
    const percent = total/5;
    console.log(percent);
}
calcPercent(88, 99, 85, 92, 100);