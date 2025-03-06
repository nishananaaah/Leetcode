const  nums1 = [1,2,4,12], nums2 = [2,4], k = 3
var numberOfPairs = function(nums1, nums2, k) {
    let count = 0;
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            let int = nums2[j]*k
            if(nums1[i]%int==0){
                count++
            }
        }
    }
    return count
};

console.log(numberOfPairs(nums1, nums2, k));