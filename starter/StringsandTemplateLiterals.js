const firstName = 'Jawad' ;
const job = 'Coder' ;
const birthYear = 3000 ;
const year = 2037 ;


const jonas = " I'm " + firstName + ' , a ' +  (year - birthYear) + ' years old ' + job + ' ! ';
console.log(jonas);



// Template literals
// ``  use back ticks 

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;

console.log(jonas);
console.log(jonasNew);
console.log(   `Im ${job}`);

console.log('New line \n\ khan  \n\  multiple lines ');

console.log(`String 
with multiple 
lines `);