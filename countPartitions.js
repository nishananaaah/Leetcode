const nums = [10,10,3,7,6]
var countPartitions = function(nums) {
   let count = 0
    for(let i=0;i<nums.length-1;i++){
        arr1 = nums.slice(0,i+1)
        arr2 = nums.slice(i+1,nums.length);
       let sum1 = arr1.reduce((acc,curr)=>acc+curr,0)
        let sum2 = arr2.reduce((acc,curr)=>acc+curr,0)
       let ans  = Math.abs(sum2-sum1)
        if(ans%2==0){
            count++;
        }
    }
    return count ;
    
   
};
console.log(countPartitions(nums));