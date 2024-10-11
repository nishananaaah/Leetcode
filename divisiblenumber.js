const n = 10, m = 3;
function getSubstract(n,m){
    let div=0;
    let nodiv=0;
    for(let i=1;i<=n;i++){
        if(i%m==0){
            div+=i
        }else{
            nodiv+=i
        }
    }
    return nodiv-div;
    
}
console.log(getSubstract(n,m));