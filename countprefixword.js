const words = ["leetcode","win","loops","success"];
const pref = "code"
var prefixCount = function(words, pref) {
    let count = 0;
    for(let i=0;i<words.length;i++){
         if(words[i].startsWith(pref)){
             count++
         }
    }
return count;
};
console.log(prefixCount(words, pref))