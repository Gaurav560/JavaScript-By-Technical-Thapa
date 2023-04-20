var curTime=new Date();

//using inbuilt getter time methods  to get individual time 
// console.log(curTime.getTime());//it gives time in millisecond from 1 jan 1970
// console.log(curTime.getHours());//it gives current hour fo day in railway hour format
// console.log(curTime.getMinutes());//it gives current minute portion of time 
// console.log(curTime.getSeconds());//it gives current second portion of time
// console.log(curTime.getMilliseconds());//it gives current millisecond portion of time

//using inbuilt setter time methods  to set individual time 
//console.log(curTime.setTIme());
console.log(curTime.setHours(11));
console.log(curTime.setMinutes(43));
console.log(curTime.setSeconds(35));
console.log(curTime.setMilliseconds(675));
