const  strs = ["flower","flow","flight"];
function getPref(strs){
    strs.sort()
    let a=strs[0];
    let b=strs[strs.length-1];
    let c='';
    for(let i=0;i<a.length;i++){
        if(a[i]==b[i]){
            c+=a[i]
        }else{
            break
        }
    }
    return c;
    
}
console.log(getPref(strs))