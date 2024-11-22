const s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"
var areNumbersAscending = function(s){
    let split = s.split(' ');
    let arr =[];
    for(let i=0;i<split.length;i++){
        if(Number(split[i])){
            arr.push(parseInt(split[i]))
        }
    }
   for(let i=0;i<arr.length;i++){
       if(arr[i]>=arr[i+1]){
           return false
       }
   }
   return true
};
console.log(areNumbersAscending(s))