//two ways to write string in js
//1st way(good way till now)
let YtName="GauravExcellent";
let StringName='Gaurav TheBest';
console.log(StringName.length);//length is a property not a method


//2nd way by creating a object
let newString=new String("GauravAggressive");
console.log(newString);


//Escape character
let news="I am going to 'kill' the interview.";
let news1='I am going to "kill" the interview.';
let news2="I am going to \"kill\" the interview.";
let news3='I am going to \'kill\' the interview.';
console.log(news)
console.log(news1)
console.log(news2)
console.log(news3)