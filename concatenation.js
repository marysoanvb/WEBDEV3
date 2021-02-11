const firstName = 'Pepperoni';
const lastName = 'Pizza';
const age = 30;
const str = 'Hi. I am Pepperoni.';
const tag = 'Web Development, Web Design, Programming';


let val;


val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Mary Soan ';
val += 'Boticario';


val = 'Hi. I am  ' + firstName + ' and I am ' + age;

// Escaping
val = "I'm glad. It's nice to meet you";

// Length
val = firstName.length;

//concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[3];

// indexog()
val = firstName.indexOf('p');
val = firstName.lastIndexOf('p');


//charAt()
val = firstName.charAt('4');

// substing()
val = firstName.substring(0, 6);

// Slice()
val = firstName.slice(0, 6);

val = firstName.slice(-4);

// split()
val = str.split(' ');
val = str.split(',');

// replace();

val = str.replace('Pepperoni', 'Hawaiian');

//includes()
val = str.includes('Hi.');

console.log(val);