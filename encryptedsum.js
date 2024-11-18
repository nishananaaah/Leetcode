const nums = [10,21,31];
var sumOfEncryptedInt = function(nums){
     let sum = 0;
     let digit;
     let num;
      for(let i=0;i<nums.length;i++){
        digit=Math.max(...nums[i].toString().split('').join(''))
        let len = nums[i].toString().split('').length
         num=digit.toString().repeat(len)
         sum+=parseInt(num)
     }
     return sum;
   
   
};
console.log(sumOfEncryptedInt(nums))