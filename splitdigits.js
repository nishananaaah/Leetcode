const nums = [13,25,83,77]
var separateDigits = function(nums) {
    let arr = nums.toString().split('')
    let ans=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=0){
            ans.push(parseInt(arr[i]))
        }
    }
    return ans
    
};
console.log(separateDigits(nums))