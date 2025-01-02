const hours = [12,12,30,24,24]
var countCompleteDayPairs = function(hours){
    let count = 0 ;
    let days;
    for(let i=0;i<hours.length;i++){
        for(let j=i+1;j<hours.length;j++){
            days = hours[i]+hours[j]
            if(days%24==0){
                count++
            }
            
        }
    }
    return count;
    
};
console.log(countCompleteDayPairs(hours))
