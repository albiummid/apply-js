function cheakLeapYear(n){
    LeapYear = (n % 4 ==0 && n % 100 !=0) || n % 400 == 0;
    return LeapYear;
}
let thisYear = cheakLeapYear(2020);
console.log(thisYear)