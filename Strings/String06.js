//other useful methods 
//toUpperCase and toLowerCase methods to convert string into upper and lower case
let string1="my name is gaurav sharma ";
let string2="MY NAME IS GAURAV SHARMA";
console.log(string1.toUpperCase());   
console.log(string1.toLowerCase());   

//concat method to add two strings 
//console.log(string1.concat(string2));
//alternate method for this using backtick 
console.log(`${string1} using backtick ${string2}`);//best method using backtick 

//trim method -removes starting and last space from a string 
let userName="  gaurav   sharma               ";
console.log(userName.trim());


//Converting String to an Array(using split() method)
var txt="a,b,c, d,?e,f";
console.log(txt.split(","));//splitting based on commas
console.log(txt.split(" "));//splitting based on space
console.log(txt.split("?"));//split based on ?