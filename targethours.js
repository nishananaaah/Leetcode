const hr=[0,1,2,3,4];
const target =2;
var numberOfEmployeesWhoMetTarget = function(hr, target) {
    let count=[];
    for(let i=0;i<hr.length;i++){
        if(hr[i]>=target){
            count.push(hr[i])
        }
    }
    return count.length;
      
};
console.log(numberOfEmployeesWhoMetTarget(hr,target))