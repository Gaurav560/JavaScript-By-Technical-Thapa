//map method (as filter returns a new array of elements bby evaluating the cond)
///but map returns a new array (which can be modernised accordingly) evaluating the condition .
const numArr=[1,3,5,7,9];
// let newArr=numArr.map((currentVal,index,array)=>{return currentVal>4});
// console.log(numArr);
// console.log(newArr);

let newArr1=numArr.map((currentVaLue,index,array)=>{
    return `Index is ${index} and element is ${currentVaLue} and its corresponding element is ${array}`
});
console.log(newArr1);