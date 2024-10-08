var getSneakyNumbers = function(nums) {
    let result =[];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                result.push(nums[i])
            }
        }
    }
    return result;
};
const nums =[7,1,5,4,3,4,6,0,9,5,8,2];
console.log(getSneakyNumbers(nums));
