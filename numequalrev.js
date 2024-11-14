const num =1800;
var isSameAfterReversals = function(num) {
  let ans =num.toString().split('').reverse().join('')
  let ans2 =parseInt(ans).toString().split('').reverse().join('')
  return num==ans2
  };
console.log(isSameAfterReversals(num))