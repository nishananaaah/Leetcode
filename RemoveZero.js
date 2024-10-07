const  nums = [0,1,0,3,12];
function removeZero(nums){
  for(let i=nums.length;i>=0;i--){
    if(nums[i]==0){
        nums.push(0);
        nums.splice(i,1)
    }
  }
  return nums;
}
console.log(removeZero(nums))