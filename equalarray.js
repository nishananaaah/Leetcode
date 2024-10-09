const  nums1 = [10], nums2 = [5];
function getEqual(nums1,nums2){

    return Math.max(...nums2)-Math.max(...nums1)
}
console.log(getEqual(nums1,nums2))