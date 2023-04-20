//crud operations in array

// //insert element by push method at the end of the array
// const foodItems=["Roti","IceCream","Chocolate","RasMalai","Paneer"];
// const arrLength=foodItems.push("Butter","Peanut","Milk");
// console.log(foodItems);
// console.log(arrLength);

//if we want to add element to the start of an array 
// const arrLength1=foodItems.unshift("Naan");
// console.log(arrLength1);
// console.log(foodItems);

const MyNumbers=[33,554,74,23,98,55];
// const NumberCount=MyNumbers.unshift(444,64,22);

//pop method removes the last eleemnt of the array and returns that element.
// const MyNumbersPop=MyNumbers.pop();
// console.log(NumberCount);
// console.log(MyNumbers);
// console.log(MyNumbersPop);

//shift method removes the element from the first index of the array .
console.log(MyNumbers);
const MyNumbersShift=MyNumbers.shift();
console.log(MyNumbersShift);
console.log(MyNumbers)
