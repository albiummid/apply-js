// var n = 123;
// for(i=2;i<=n-1;i++)
// // i<n can be used
// {
//     console.log(i,n%i);
//     if(n%i==0){
//         console.log("not a prime")
//         break;
//     }
// }
// console.log("Your number is prime number")

function isPrime(n){
    for(i=2; i<n; i++){
    console.log(i,n%i);
    if(n%i==0){
        return "not a prime number"
    }
}
return "Your number is a prime number";
}
console.log(isPrime(2))