
const  s = "book"
var halvesAreAlike = function(s){
    let vowels =['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count1 =0;
    let count2 =0;
    let a='';
    let b='';
    for(let i=0;i<s.length;i++){
        if(i<s.length/2){
            a+=s[i]
        }else{
            b+=s[i]
        }
    }
    for(let j=0;j<a.length;j++){
        if(vowels.includes(a[j])){
            count1++
        }
        if(vowels.includes(b[j])){
            count2++
        }
    }
   return count1==count2;
};
console.log(halvesAreAlike(s))