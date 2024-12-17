const nums =[-1,10,6,7,-7,1]
var findMaxK = function(nums) {
    nums.sort((a,b)=>b-a);
    for(let i=0;i<nums.length;i++){
        if(nums.includes(-nums[i])){
            return nums[i]
        }
    }
    return -1
      
};
console.log(findMaxK(nums))
   
