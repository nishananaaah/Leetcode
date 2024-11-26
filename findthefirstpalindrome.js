const words = ["abc","car","ada","racecar","cool"]
var firstPalindrome = function(words){
    for(let i=0;i<words.length;i++){
        let str = words[i].split('').reverse().join('');
        if(words[i]==str){
            return words[i]
        }
    }
    
};
console.log(firstPalindrome(words));