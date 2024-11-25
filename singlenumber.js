const nums =[2,2,1]
var singleNumber = function(nums) {
    for(let i=0;i<nums.length;i++){
          let count =0
       for(let j=0;j<nums.length;j++){
           if(nums[i]==nums[j]&&i!=j){
               count=1
              
           }
       }
        if(count==0){
           return nums[i]
      }
    }
   
    
};
console.log(singleNumber(nums));