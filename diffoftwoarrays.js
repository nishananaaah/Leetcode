const nums1 = [1,2,3,3], nums2 = [1,1,2,2]
var findDifference = function(nums1, nums2) {
  let arry1= new Set(nums1);
 let arry2 = new Set(nums2)
 let x= [...arry1];
 let y=[...arry2];
 
    let result = [];
    let arr1=[];
    let arr2=[];
    for(let i=0;i<x.length;i++){
        if(!nums2.includes(x[i])){
            arr1.push(x[i])
        }
    }
    for(let j=0;j<y.length;j++){
        if(!nums1.includes(y[j])){
            arr2.push(y[j])
        }
    }
    result.push(arr1,arr2);
    return result
    
};
console.log(findDifference(nums1,nums2))