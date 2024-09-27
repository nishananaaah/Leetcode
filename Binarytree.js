const num=[1,null,2,3];
function getbinarytree(num){
    let result=[];
    for(let i=0;i<num.length;i++){
        if(num[i]>0){
            result.push(num[i]);
        }
    }
    return result;
}
console.log(getbinarytree(num))