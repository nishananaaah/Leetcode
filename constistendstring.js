const  allowed = "ab";
const words = ["ad","bd","aaab","baa","badab"];
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    let arr = allowed.split('')
   for(let i=0;i<words.length;i++){
       let flag=true
       for(let j=0;j<words[i].length;j++){
           if(!arr.includes(words[i][j])){
               flag=false
           }
       }
       if(flag){
           count++
       }
   }
   return count;


    
};
console.log(countConsistentStrings(allowed, words))