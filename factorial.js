// factorial =1;
// for(let i = 1; i<= 7;i++){
//     factorial = factorial*i
//     console.log(i,factorial)
// }


// for factorial
function fact(n){
    factorial =1;
    for(let i = 1; i<=n ;i++){
        factorial = factorial*i
    }
    return factorial;
}
const result = fact(5);
console.log(result)
// another way
console.log(fact(-5))