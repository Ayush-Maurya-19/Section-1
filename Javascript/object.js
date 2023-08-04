let user = {
    name: 'Ayush',
    email: 'ayushmaurya180@gmail.com',
    password: '12343dgsfd',
    age: 22
};

console.log( user.name );
console.log( user['email'] );

user.password = 'jdfkalj21323';
user.address = 'Lucknow';
console.log(user);

console.log('-------------------------');

let smartphone = {
    brand: 'Samsumg',
    model: 'Galaxy Z Fold5',
    price: '16,4999',
    colors: ['black', 'white', 'purple'],
    features:{
        cup: 'Snapdragon 865',
        ram: '12gb',
        storage: '512gb'
    }
};

console.log(Object.keys(smartphone));
console.log(Object.values(smartphone));

//syntax to access third color from smartphone
smartphone.colors[2]= 'gray';
console.log(smartphone);

//syntax to change the cpu of smartphone to 'sd 880'
smartphone.features.cpu='sd888';
console.log(smartphone);

// display all the keys of features object

let smartphones = [
    {
        brand : 'Samsung',
        model : 's23',
        price : 70000,
        colors: [ 'black', 'white', 'blue' ]
    },
    {
        brand : 'Samsung',
        model : 'Galaxy Note 20 Ultra',
        price : 80000,
        colors: [ 'black', 'blue' ]
    },
    {
        brand : 'Poco',
        model : 'M4 Pro',
        price : 22500,
        colors: [ 'yellow', 'blue' ]
    },
    {
        brand : 'Moto',
        model : 'G8',
        price : 16000,
        colors: [ 'black' , 'blue', 'white' ]
    },
    {
        brand : 'Nothing',
        model : '2',
        price : 50000,
        colors: [ 'white' , 'black' ]
    },
];
// 1. change the price of 2nd phone to 35000.
// 2. add a new color to last 2nd phone.
// 3. use a for of loop to count the number of 
// phones having price less than 50000.

// 1. ans
smartphones[1].price = 35000;

// 2. ans
smartphones.at(-2).colors.push('pink');

console.log(smartphones.at(-2).colors);

console.log(smartphones);

// 3. ans

let count = 0;

for(let phone of smartphones){
    
    if(phone.price < 50000){
        count++;
    }
}

console.log(count);

// use map get an array of all the brands of smartphones
// use filter get all smartphones having price less than 50000
// use filter get all smartphones having color black

let brands = smartphones.map( (p) => { return p.brand } );

console.log(new Set(brands));

let phones1 = smartphones.filter( (phone) => { return phone.price<50000 } )
console.log(phones1);
let phones2 = smartphones.filter( (phone) => { return phone.colors.includes('black') } );

console.log(phones2);