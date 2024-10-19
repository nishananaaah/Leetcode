const nums = [1,2,3,4];
var decompressRLElist = function(nums) {
    let result =[];
    let f,v;
   for(let i=0;i<nums.length;i+=2){
       f=nums[i];
       v=nums[i+1]
       for(let j=0;j<f;j++){
           result.push(v)
       }
        }
        return result;
};
console.log( decompressRLElist(nums))