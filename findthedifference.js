const s ="a";
const t ="aa"
var findTheDifference = function(s, t) {
    if(s=="") return t;
    s=s.split("").sort();
    t=t.split("").sort();
    for(let i=0;i<t.length;i++){
       if(s[i] !=t[i]){
        return t[i]
       }
    } 
};
console.log(findTheDifference(s,t))