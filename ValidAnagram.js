const  s = "anagram"; const t = "nagaram";
function getBoolean(s,t){
 let sstr=s.split('').sort().join('');
 let tstr=t.split('').sort().join('');
    let result =sstr===tstr;
    return result;
}
console.log(getBoolean(s,t))

