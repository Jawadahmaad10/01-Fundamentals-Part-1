

const hasDriversLicense = true ;   // A
const hasGoodVision = true;        // B
const isTired = true;


console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive){
  console.log('He should drive ');
}

else{
console.log('He should not drive');
}



if(hasDriversLicense && hasGoodVision && !isTired){
console.log('Cleared to drive car');
}
else{
console.log('Should not drive car ');  
}