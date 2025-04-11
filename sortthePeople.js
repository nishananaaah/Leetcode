const names = ["Mary","John","Emma"], heights = [180,165,170]
var sortPeople = function(names, heights) {
    let sortArray = [...heights];
    sortArray.sort((a,b)=>b-a);
    let result =[];
    for(let i=0;i<heights.length;i++){
    let index = heights.indexOf(sortArray[i])
    result.push(names[index])
    }
    return result;
    
};

console.log(sortPeople(names, heights));