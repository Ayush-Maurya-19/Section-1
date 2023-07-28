const nums = [23, 6, 7, 34, 57, 62, '32456'];

console.log(nums);
console.log(typeof nums);

const movies = ['Iron Man', 'Barbie', 'Oppenheimer', 'Inception', 'Conjuring', 'Witcher'];

console.log(movies.length);

console.log(movies[3]);
console.log(movies[-2]);
console.log(movies.at(-2));

//Slicing
console.log(movies.slice(2,5));
console.log(movies.slice(2,-1));
console.log(movies.slice(2));
console.log(movies.slice(2,100));

//adding elements
movies.push('Need For Speed') //adding element at the end of the array.
movies.unshift('See') //adding element at the beginning of the array.
console.log(movies);

// removing elements
movies.pop(); // removes element from end of array
movies.shift(); // removes element from beginning of array

console.log(movies);

movies.splice(3, 2);

console.log(movies);

movies.splice(1, 1, 'Frozen');

console.log(movies);

movies.splice(2, 3);

console.log(movies);

console.log(...movies);

console.log(['mi4' , ...movies, 'mi1','mi2', 'mi3']);