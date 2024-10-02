
let str = "word searches are super fun";
let letter = "s";

function specialReverse(str,letter){
    let word = str.split(' ')
    var rev = ''
    for(let i=0;i<word.length;i++){
        let le = word[i].split('').join('')
        // console.log(le)
        if(le[0]==letter){
            for(let k=le.length-1;k>=0;k--){
                 rev += le[k]
            }
            word[i] = rev
            rev = ''
        }
    }
    return word.join(" ")
    
}

console.log(specialReverse(str,letter))