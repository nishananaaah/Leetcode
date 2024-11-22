const  nums = [5,3,6,1,12];
const original = 3;
var findFinalValue = function(nums, original){
    for(let i=0;i<nums.length;i++){
        if(nums.includes(original)){
            original=original*2
            i=0
        }
    }
    return original
    
};
console.log(findFinalValue(nums, original))
