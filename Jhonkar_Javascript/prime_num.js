function isPrime(n){
    for(i =2 ; i < n; i++){
        if(n%i == 0){
            return 'Not a prime number';
        }
    }
    return 'Your number is Prime Number';
}
var result = isPrime(13);
console.log(result);