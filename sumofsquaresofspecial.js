const nums = [2,7,1,19,18,3]
var sumOfSquares = function(nums){
    let sum = 0
    let n = nums.length;
    for(let i=0;i<n;i++){
        let j=i+1;
        if(n%j==0){
            sum+=nums[i]*nums[i]
           
        }
    }
    return sum;
    
};
console.log(sumOfSquares(nums))