const nums = [1,2,5,2,3] 
const target = 2 ;
var targetIndices = function(nums, target) {
    let sort = nums.sort((a,b)=>a-b);
    let arr =[];
    for(let i=0;i<sort.length;i++){
        if(sort[i]==target){
            arr.push(i)
        }
    }
    return arr;
    
};
console.log(targetIndices(nums, target)) 