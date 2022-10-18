//3 names and code should output the longest of the 3 names

let name1 = "Brandon";
let name2 = "Dalia";
let name3 ="Idon";

if(name3.length > name2.length && name3.length > name1.length){
    console.log(`${name3} has the longest name!`);
}
else if(name2.length > name1.length && name2.length > name3.length){
    console.log(`${name2} has the longest name!`); 
}
else{
 console.log(`${name1} has the longest name of all three names!`);   
}
