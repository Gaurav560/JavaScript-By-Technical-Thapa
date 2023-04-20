//find the squareroot of each element in an array 
// const numbers=[25,36,49,64,81];
// let numbersSqrt=numbers.map((currentValue,index,array)=>{
//     return Math.sqrt(currentValue);
// });
// console.log(numbersSqrt);
debugger
const numbers1=[2,3,4,6,8];
let value=numbers1.map((currentVaLue)=>{
  return currentVaLue*2;
}).filter((currentElem)=>{return currentElem>10}).reduce((accumulator,currentVal)=>{return accumulator += currentVal},44);
console.log(value);