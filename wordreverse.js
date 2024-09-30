const str ="Nishana Niyas";

function getreversed(str){
    return str.split(' ')
    .map(word=>word.split('').reverse().join(''))
    .join(' ')
}
console.log(getreversed(str))