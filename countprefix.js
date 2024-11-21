const words =["feh","w","w","lwd","c","s","vk","zwlv","n","w","sw","qrd","w","w","mqe","w","w","w","gb","w","qy","xs","br","wh","rypg","w","g","w","w","fh","w","w","sccy"]
const s = "w";
var countPrefixes = function(words, s){
    let count=0;
    for(let i=0;i<words.length;i++){
     if(s.startsWith(words[i])){
         count++
     }
    }
    return count
    
};
console.log(countPrefixes(words, s))