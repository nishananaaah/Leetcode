const x=18;
function getDivisible(x){
    let y=x.toString().split('')
    let sum =0;
    for(let i=0;i<y.length;i++){
        sum+=parseInt(y[i]);
    }if(x%sum===0){
        return sum;
    }else{
       return  -1;
    }
}
console.log(getDivisible(x))