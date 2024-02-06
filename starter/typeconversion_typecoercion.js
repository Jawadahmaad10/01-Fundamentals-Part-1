//Type conversion
const inputYear = '1991';   //string
///////////.......number  ... , String
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);   //result is still string
console.log(Number(inputYear)+ 18);
console.log(Number('Jawad'));  // can not be coverted. Output .. NaN


console.log(String(23));


//Type Coercion

// Automatically converts the 22 into string
// type coercion
console.log('I am ' + 22 + ' years old');
// this one ismanually
console.log('I am ' + '22' + ' years old');
//manually type conversion
console.log('I am ' + String(22) + ' years old');

//type coercion another example
console.log('23' - '10' - 3);  // gives us 10

const value = '20' - 10;
console.log(value);
console.log(typeof value);


console.log('23' * '2');

let n = '1' + 1;    // we have string  '1' so + 1 also converted to string gives 11
console.log(typeof n);
n = n-1 ;           // here 11 converted to number 
console.log(typeof n);
console.log(n);


// - minus converts it to number always
let k = '4' - 2;   
console.log(typeof k);
k = k+1 ;           // 
console.log(typeof k);
console.log(k);


