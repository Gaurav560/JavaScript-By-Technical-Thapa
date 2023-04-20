//Extracting String characters
//three methods
//1. charAt(index position)-returns the character at specified index 
let alphabets="a,b,c,d,e,g,h,j,";
console.log(alphabets.charAt(5));
console.log(alphabets.charAt(-5));

//2nd method-charCodeAt()-returns ascii code and takes index of value as parameter
console.log(alphabets.charCodeAt(0));

//3rd method-Property Access EcmaScript5 ka hai 2009 mein aaya tha 
//it allows property access [] on strings 
let str="HELLO WORLD";
//SAME AS ARRAY 
console.log(str[0]);