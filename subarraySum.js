const nums = [2,3,1]
var subarraySum = function(nums) {
    let sum = 0
    for(let i=0;i<nums.length;i++){
       const start = Math.max(0, i - nums[i]);
       for(let j=start;j<=i;j++){
           sum+=nums[j]
          
       }
       
        
    }
    return sum
}


console.log(subarraySum(nums));