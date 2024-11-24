const x =121;
var isPalindrome = function(x) {
    let rev = x.toString().split('').reverse().join('')
      if(x==parseInt(rev)){
          return true
      }else{
          return false
      }
    
};

console.log(isPalindrome(x));