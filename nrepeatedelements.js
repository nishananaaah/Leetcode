const nums = [5,1,5,2,5,3,5,4];
var repeatedNTimes = function(nums) {
   let count=0
   let len = nums.length
    for(let i=0;i<nums.length;i++){
       for(let j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j]){
               count++
            }
            if(count>0){
                return nums[i]
            }
            
        }
        
    }
   
 };
console.log(repeatedNTimes(nums));