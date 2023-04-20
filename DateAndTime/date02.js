//date methods which we use on normal basis 


//how to get date date on individual basis(by using inbuilt getter methods)
var currentDate=new Date();
// console.log(currentDate.toLocaleString());//gives full date and time 
// console.log(currentDate.getFullYear());//(gives full year like 2023)
// console.log(currentDate.getMonth());//(gives month  -0 means jan and 11 means dec)
// console.log(currentDate.getDay());//gives day of the week (7 means sunday)
// console.log(currentDate.getDate());//gives date of month(from 1 to 31)

//how to set our individual dates by setter methods
console.log(currentDate.setFullYear(2023));//return in milliseconds
console.log(currentDate.setFullYear(2023,11,2));//return in milliseconds
console.log(currentDate.setMonth(2));//return in milliseconds
console.log(currentDate.setDate(11));//return in milliseconds
console.log(currentDate.toLocaleString());//return in milliseconds