const grid = [[1,3],[2,2]];
var findMissingAndRepeatedValues = function(grid){
    let arr = grid.flat().sort((a,b)=>a-b)
    let ans = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1]){
            ans.push(arr[i])
        }
     }
     for(let j=1;j<=arr.length;j++){
         if(!arr.includes(j)){
             ans.push(j)
         }
     }
    return ans;
    
};
console.log(findMissingAndRepeatedValues(grid))