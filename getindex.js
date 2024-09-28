const  haystack = "sadbadhard";
const  needle ="sad";
function getindex(haystack,needle){
    let result='';
    if(haystack.includes(needle)){
        result=haystack.indexOf(needle);
    }else{
        return -1;
    }
    return result;
}
console.log(getindex(haystack,needle))