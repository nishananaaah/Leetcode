const  s = "abc";
const t = "bac";
var findPermutationDifference = function(s,t) {
    let sum = 0;
    for(let i=0;i<s.length;i++){
       sum+=Math.abs(i-t.indexOf(s[i]))
       }
 return sum
    
};

console.log(findPermutationDifference(s,t));