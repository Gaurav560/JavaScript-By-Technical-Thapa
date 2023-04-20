//Finding a string in a string (indexOf method -returns the first imdex value of string)
let carName="Mercedez Benz Lamborghini Avantador Bajaj Pulsar Hero SPlendor Thar";
console.log(carName.indexOf("Bajaj"));
console.log(carName.indexOf("e",11));

//lastIndexOf searches the String in backward direction 
console.log(carName.lastIndexOf("e",6));

//search method for finding a string within a string (this method does not take a starting postion for finding the string (also case sensitive ))
console.log(carName.search("Hero"));