const  height = [1,2,3,4,5], threshold = 2
var stableMountains = function(height, threshold) {
    let arr =[];
    for(let i=0;i<height.length;i++){
        if(height[i-1]>threshold){
            arr.push(i)
        }
       
    }
    return arr;
    
    
};
console.log(stableMountains(height, threshold));