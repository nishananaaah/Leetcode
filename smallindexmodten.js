const nums = [0,1,2];
var smallestEqual = function(nums) {
    let arr = [];
    for(let i=0;i<nums.length;i++){
        if(i%10==nums[i]){
            arr.push(nums[i])
        }
        
    }
    if(arr.length==0){
        return -1
    }
    return Math.min(...arr)
    
};
console.log(smallestEqual(nums))