const  nums = [2,5,1,3,4,7], n = 3
var shuffle = function(nums, n) {
    let arr = [];
    for(let i=0;i<n;i++){
        arr.push(nums[i])
        arr.push(nums[i+n])
    }
    return arr;
   
};
console.log(shuffle(nums,n))
