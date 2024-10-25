const heights = [1,1,4,2,1,3];
var heightChecker = function(heights){
    let exp=[...heights].sort((a,b)=>a-b)
    let count =0;
    for(let i=0;i<heights.length;i++){
         if(heights[i]!==exp[i]){
                count++;
        }
    }
  
    return count;
    
}
console.log(heightChecker(heights))