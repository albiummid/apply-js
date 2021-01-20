// var i=1;
// var factorial=1;
// while(i<=10){
//     factorial = factorial * i;
//     // console.log(i,factorial);
// i++;
// }
// console.log(factorial);
// by consoling on outside on loop it show the last prossed value.

function factorial(n){
    var i = 1;
    var fact = 1;
    while (i <= n) {
        fact = fact * i;
        i++;
    }
    return fact;
}


console.log(factorial(4))