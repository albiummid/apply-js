function cheakLeapYear(n){
    if((n%4==0 && n%100 !==0)|| n%400==0){
        // return true + " Yeah! this is a leap year brah!";
        console.log("This is true");
        return true;
    }
    else{
        // return false + " Nooh!! This is not a leap year."
        console.log("This is false");
        return false;
    }

}
const thisYear = cheakLeapYear(2021);
console.log(thisYear);