const s ="Hello how are you Contestant";
const k= 4
var truncateSentence = function(s, k) {
   let str = s.split(' ')
   let res = '';
   for(let i=0;i<k;i++){
       res+=str[i]+' '
   }
   return res
   
};
console.log(truncateSentence(s,k))