const s = "foobar", letter = "o";
var percentageLetter = function(s, letter) {
    let count = 0;
    let per;
    for(let i=0;i<s.length;i++){
        if(s[i].includes(letter)){
            count++
            per = count/s.length * 100
        }
    }
    return Math.round(per)
    
    
};
console.log(percentageLetter(s,letter))
