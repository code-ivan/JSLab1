const IsInteger = function(num){
    return !(num%1);
}

const IsPrime = function(num){
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i == 0)
            return false;
    if (num < 2)
        return false;
    return true;
}

const findPrimes = function(from, to){
    let primes = [];
    for(let i = from; i <= to; i++){
        if(IsPrime(i)){
            primes.push(i);
        }
    }
    return primes;
}

alert("1:  " + IsInteger(1));
alert("1.5:  " + IsInteger(1.5));
alert("-0.5:  " + IsInteger(-0.5));
alert(findPrimes(4, 57));

