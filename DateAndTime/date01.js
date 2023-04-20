//there are four ways through which date objects are created 
//1.
let currDate=new Date();//gives greenwich time
console.log(currDate);
console.log(new Date().toLocaleString());//when the date object calls toLocaleString method it gives local time of your country
console.log(new Date().toString());

//Date.now()-this method returns the time in milliseconds starting from 1 jan 1970
console.log(Date.now())

//2nd method 
//new Date(year,month,day,hours,minutes,seconds,milliSecinds);
var d=new Date(2023,02,11,18,37,45,0);
console.log(d.toString());

//agar parameter pass karoge object crreation ke time to ,at least there should be tow arguments an month argument is necessary .
var d1=new Date(2023,02);
console.log(d1.toString());

//3rd method -new Date(dateString)
var date2=new Date("May 11,2023 06:12:34");
console.log(date2)
console.log(date2.toLocaleString());
console.log(date2.toString());

//4 th metohd- getting time by inserting oly milliseconds to out date object
var d3=new Date(1678540953497);
console.log(d3.toLocaleString());

//when we pass 0 milliseconds in the argument
var d3=new Date(0);///it gives 1 jan 1970 
console.log(d3.toLocaleString());
