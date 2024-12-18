const num = "6777133339"
var largestGoodInteger = function(nums) {
    let arr = [];
    for(let i=0;i<num.length;i++){
        if(nums[i]==nums[i+1]&&nums[i+1]==nums[i+2]){
            arr.push(parseInt(nums[i]))
        }
    }
    return Math.max(...arr).toString().repeat(3)
};
console.log(largestGoodInteger(num))