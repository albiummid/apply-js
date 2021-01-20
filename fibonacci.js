// var fibo=[0,1];
// // fibo[2]=fibo[2-1]+fibo
// for(var i=2;i<=12;i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }
// console.log(fibo)

function fibonacci(n){
    var fibo =[0,1];
    for(var i=2;i<=n;i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
console.log(fibonacci(5))

// while loop thiye practice korbo.