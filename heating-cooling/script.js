//Heating-Cooling

//define two variables
let actualTemp = 77;
let desiredTemp = 72;

//write conditionals to tell heating and cooling system what to do
//log 3 things: run A/C, Run heat, or Standby

if(actualTemp === desiredTemp){
    console.log('Standby');
}
else if(actualTemp < desiredTemp){
    console.log('Run heat');
}
else{
    console.log('Run A/C');
}


//Extended Challenge

//tempCelsius - a number
//targetUnit - a string, either C, F, or K
let tempCelsius
let targetUnit

//write switch statement that checks the targetUnit & logs temp converted to that unit
//k=Kelvin, c=requires no conversion, print out original temp