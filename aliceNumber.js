const nums=[1,2,3,4,10];
function getWin(nums){
    let s=0;
    let d=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<10){
            s+=nums[i]
        }else {
            d+=nums[i]
        }
    }
    if(s>d||d>s){
        return true
        
    }else{
        return false;
    }

}
console.log(getWin(nums))