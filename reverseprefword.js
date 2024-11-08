const word = "abcdefd";
const ch = "d";
var reversePrefix = function(word, ch) {
    let ans ='';
    let arr = word.split('');
    let len = word.indexOf(ch);
    for(let i=len;i>=0;i--){
         ans+=word[i]
    }
    for(let i=len+1;i<word.length;i++){
          ans+=word[i]
    }
    return ans;
    
};

console.log(reversePrefix(word,ch));