const nums = [[3,6],[1,5],[4,7]];
var numberOfPoints = function(nums) {
    let arr = [];
    for(let i=0;i<nums.length;i++){
        for(let j=nums[i][1];j>=nums[i][0];j--){
            arr.push(j)
        }
    }
    return [...new Set(arr)].length
 
};
console.log(numberOfPoints(nums))