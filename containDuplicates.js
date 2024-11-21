const nums = [1,2,3,1]
var containsDuplicate = function(nums){
   let arr = [...new Set(nums)];
   if(arr.length!==nums.length){
       return true
   }
    return false
   };
console.log(containsDuplicate(nums))