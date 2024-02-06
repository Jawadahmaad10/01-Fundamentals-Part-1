const age = 23
// test whether age is 18 
            // if                        
age >= 18  ? console.log('You are allowed to drive') : console.log('I am not allowed to drive ');

const drink = age >= 18  ? 'Coffee' : 'Tea' ;
console.log(drink);



let drink2;
if(age >= 18){
   drink2 ='Coffee'; 
}

else{
    drink2 ='tea';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? ' Coffee' : 'Tea'}`);