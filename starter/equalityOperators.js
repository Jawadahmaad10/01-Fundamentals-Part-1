const age = 18;
// no type coercion
if(age === 18) console.log('You just became an adult (strict)');
console.log(18 === 18);    // true 
if(age === 18) console.log('You just became an adult (loose)')
console.log('18' === 18);  //false -> no type coercion string not converted to number 
// double notation perform type coercion 
console.log('18' == 18);  // String converted to number



//Now if age is '18' in strings

const agee = '18'

if (agee===18){
    console.log('Strict one will not execute in this case');
}


if(agee == 18){
 console.log(' Loose case. In this case type coercion is done so it will be executed');   
}



const favourite = Number(prompt("What's  your favourite number ? "));
console.log(favourite);
console.log(typeof favourite);


if( favourite === 23){    // strict operator is used here 
  console.log('Cool! 23 is an amazing number!');  
}

else if(favourite === 7) {
console.log('7 is a cool number');
}
else if(favourite === 9) {
    console.log(' 9 is a cool number');
    }

else{
    console.log('Number is not 23 or 7 or 9');
}




if(favourite !== 23){
  console.log('Why not 23 ?');
}




