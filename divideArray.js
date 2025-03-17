const nums = [1,2,3,4]
var divideArray = function(nums) {
   nums.sort((a,b)=>a-b)
   let count =0;
   for(let i=0;i<nums.length;i+=2){
       if(nums[i]!=nums[i+1]){
           count++
           return false
       }
       
   }
   return true
    
    
    
};

console.log(divideArray(nums));