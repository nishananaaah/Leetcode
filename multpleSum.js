const n =234;
var subtractProductAndSum = function(n) {
   n=n.toString()
   let multiply=1;
   let sum =0;
    for(let i=0;i<n.length;i++){
        sum+=parseInt(n[i])
        multiply*=parseInt(n[i])
    }
    return multiply-sum
};
console.log(subtractProductAndSum(n))