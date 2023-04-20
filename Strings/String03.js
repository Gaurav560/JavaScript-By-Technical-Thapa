//three methods for extracting a part of String 
//slice method(start position index,end postion index)-returns a new string with the sliced String part 
var fruitsName="kiwi,Banana,apple,Papaya,Pomegranate,Avocado,Grapes";
console.log(fruitsName.slice(0,8));//does not include the upper index value (8th index value not included)
console.log(fruitsName.slice(8,-2));//last tak jaayegga aur -2 means last ka 2 value chor dega aur baaki sab return kar dega 


//2nd method-subString method-similar to splice method but cannot accept negative index in the argument
console.log(fruitsName.substring(0,5));
console.log(fruitsName.substring(-2,8));//starting index 0 ho jaayega agar -ve starting index hai 
console.log(fruitsName.substring(7,-2));//jahan subString mein- dikhe iska matlab hai 0 se start karo aur starting index ban jaayega laast index

//subStr method -same as splice but second parameter denotes the length of the extracted part
console.log(fruitsName.substr(0,2));//caqnt use negative value in length parameter

console.log(fruitsName.substr(-6));//agar backside se data chahiye to direct length likh daalo -ve mein 
