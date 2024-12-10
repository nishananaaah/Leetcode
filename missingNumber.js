const nums = [3,0,1]
var missingNumber = function(nums) {
    let sort = nums.sort((a,b)=>a-b)
    for(let i=0;i<=sort.length;i++){
         if(!sort.includes(i)){
            return i
         }
    }
};
console.log(missingNumber(nums));