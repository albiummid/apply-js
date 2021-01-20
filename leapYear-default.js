const year =3688;
let remainder = year % 4;
if (remainder ==0)
// 1 "=" is set value. 2 "=" condition
{
    console.log("Year is leap year")
}
else{
    console.log("Year is leap Year")
}


// function
function cheakLeapYear(year){
   LeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
return LeapYear + " Leap Year";

}
var leapYearCheck = cheakLeapYear(2021);
console.log(leapYearCheck);
var dada = cheakLeapYear(2252)
console.log(dada)



































// if(year%4==0);
// {
//     console.log{year "is a leap year"}
// }
// else{
//     console.log(year "is not a leap year")
// }