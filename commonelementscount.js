const nums1 = [2,3,2], nums2 = [1,2]
var findIntersectionValues = function(nums1, nums2) {
  let count1 = 0;
  let count2 = 0;
  let arr = []
  for(let i=0;i<nums1.length;i++){
      if(nums2.includes(nums1[i])){
          count1++
      }
  }
   for(let j=0;j<nums2.length;j++){
      if(nums1.includes(nums2[j])){
          count2++
      }
  }
  arr.push(count1,count2)
  return arr
};
console.log(findIntersectionValues(nums1,nums2));