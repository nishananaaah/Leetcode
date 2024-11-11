const nums = [3,4,5,2];
var maxProduct = function(nums) {
   let arr = nums.sort((a,b)=>a-b);
  let i = arr.length-1
  let j= arr.length-2;
  let ans = (arr[j]-1)* (arr[i]-1)
  return ans
  };
console.log(maxProduct (nums))