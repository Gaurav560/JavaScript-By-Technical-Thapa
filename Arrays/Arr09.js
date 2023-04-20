const TwodArr=[[1,2,4],[5,6,7],[9,8,3],[2,1,6]];
let OneDArray=TwodArr.reduce((acc,cV)=>{return acc.concat(cV)});
console.log(OneDArray);