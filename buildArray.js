const nums = [5,0,1,2,3,4]
var buildArray = function(nums) {
    let arr = []
for(let i=0;i<nums.length;i++){
     arr.push(nums[nums[i]])
    
   
}  
return arr;
};

console.log(buildArray(nums));