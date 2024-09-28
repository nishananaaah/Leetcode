const nums=[1,null,2,3];
function getSorted(nums){
    let result=[];
    let reversed=nums.toString().split('').reverse();
    for(let i=0;i<reversed.length;i++){
        if(reversed[i]>0){
            result.push(parseInt(reversed[i]));
       
        }
    }
    return result;
    
}
console.log(getSorted(nums))