// falsy values 
// In javascript there are 5 falsy values 
// they are  0 , '', undefined , null , NaN
//These value will be converted to false when we convert them into boolean
//Not initially false but becomes false when converted  into boolean



console.log(Boolean(0));      //  output > false 
console.log(Boolean(undefined));   // false
console.log(Boolean('Jawad'));   //String   > true
console.log(Boolean({}));        // empty Object  > true


//Bellow in if else condition works true false etc 
const money = 0;

if(money){         //money = 0 ;   false so sent to else condtion
    console.log("Don't Spent it all");
}
else{
    console.log("You should get a Job !");
}



// undefine -> boolean -> false 
// if height = 123 -> boolean -> true
let height;
if(height){
    console.log('Yay ! height is defined');
}
else{
    console.log("Height is undefined");
}
