
// var foods=["BoiledEgg","Chicken","Potato","GreenPeas","Chicken","Sweet","raddish"];

// //1st array searching method -indexOf(gives the first index of same element)
// console.log(foods.indexOf("raddish",3));

// //lastIndexOf(gives the last index of element)
// console.log(foods.lastIndexOf("Chicken",3));

// //includes method check whether the element is present or not 
// console.log(foods.includes("Chicken"));

// //find method (only gives single output)
// var price=[200,300,400,500,600];
// const findElem=price.find((currentVal)=>{return currentVal<300});
// console.log(findElem);
// //findIndex(same as find but returns the index of the output element)
// const findElemByIndex=price.findIndex((currentVal)=>currentVal<300);
// console.log(findElemByIndex);

//filter method returns all elements which satisfies condition,stored in an array
var laptopPrice=[100000,30000,240504,5433,76543,60000,403342];
const filteredPrice=laptopPrice.filter((currentPrice)=>{return currentPrice>100000});
console.log(filteredPrice);