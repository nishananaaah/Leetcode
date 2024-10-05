const n=16;
function getPower(n){
    if(n<1){
        return false;
    }
    while(n%4===0){
        n/=4
    }
    return n===1;

}
console.log(getPower(n))