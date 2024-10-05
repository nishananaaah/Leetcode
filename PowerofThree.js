var isPowerOfThree = function(n) {
    while(n>1) n=n/3
    return n==1
   
}
const n=27;
console.log(isPowerOfThree(n))