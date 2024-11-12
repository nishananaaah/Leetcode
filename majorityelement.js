const nums = [3,2,3];
var majorityElement = function(nums){
    for(let i=0;i<nums.length;i++){
        let count =1;
        for(let j=0;j<nums.length;j++){
            if(nums[i]==nums[j]&&i!=j){
                count++
            }
        }
        if(count>nums.length/2){
            return nums[i]
        }
      
    }
};
console.log(majorityElement(nums))