const arr = [4,3,2,2,4,1,3,4,3]
var findLucky = function(arr){
    let max = [];
   
    for(let i=0;i<arr.length;i++){
         let count = 0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++
            }
        }
        if(arr[i]==count){
            max.push(arr[i])
        }
  } 
      if(max.length==0){
            return -1
        }
        return Math.max(...max)
    }
    console.log(findLucky(arr))