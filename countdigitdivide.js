const num =7;
var countDigits = function(num) {
    let count = 0;
    let nums=num.toString().split('')
    for(let i=0;i<nums.length;i++){
        let n=parseInt(nums[i])
        if(num%n==0){
            count++
        }
    }
    return count;
};

console.log(countDigits(num));