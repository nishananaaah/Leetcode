const words = ["leet","code"];
const x = "e";
function getIndex(words,x){
    let result =[];
    for(let i=0;i<words.length;i++){
        if(words[i].includes(x)){
             result.push(i)
        }
    }
    return result;
}

console.log(getIndex(words,x));