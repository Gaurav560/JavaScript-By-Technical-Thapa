//splice method for all crud operation
const months=["April","June","May","March","Dec","November"];

//inserting a month 
// const insertMonth=months.splice(months.length,0,"October");
// console.log(months);

//deleting a month
// const check=months.includes("June");
// if (check==true) {
//     const findIndex=months.indexOf("June");
//     const deleteMonth=months.splice(findIndex,1)  ;
//     console.log(months); 
// }


//updating a month name with the help of slice method

const check1=months.includes("June");
if (check1==true) {
    const findIndex=months.indexOf("June");
    const updateMonthName=months.splice(findIndex,1,"Junely")  ;
    console.log(months); 
    console.log(updateMonthName);
}

//note :splice method returns the deleted element 