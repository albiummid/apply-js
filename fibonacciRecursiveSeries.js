function fibonacci(n){
    if(n == 0){
        return [0]
        // [] is used for putting the value in a array.
    }
    else if(n==1){
        return[0,1];
    }
    else{
        // calculate array nth element array.
        var fibo = fibonacci(n-1);
        var nextElement = fibo[n-1] +fibo[n-2];
        fibo.push(nextElement)
        return fibo;
    }
}
console.log(fibonacci(10))