//basic for loop
// var students=["Gaurav","Piyush","Aryan","Sameer"];
// for (let index = 0; index < students.length; index++) {
//     const element = students[index];
//     console.log(element);
// }

//For in loop(returns the index of the element)
// var students=["Gaurav","Piyush","Aryan","Sameer"];
// for(let elements in students){
//     console.log(elements);
// }
//for of loop(returns the elements of the array )
// var students=["Gaurav","Piyush","Aryan","Sameer"];
// for(let elements of students){
//     console.log(elements);
// }

//for each loop with traditional function and fat arrow function 
var students=["Gaurav","Piyush","Aryan","Sameer"];
students.forEach(function(value,i,arr){
    console.log(value+"index:"+i+"  Array: "+arr)
});