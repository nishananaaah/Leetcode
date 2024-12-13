const  nums = [2,5,6,9,10];
var findGCD = function(nums) {
    let small = Math.min(...nums);
    let large = Math.max(...nums);
    let arr = [];
    for(let i=0;i<=small;i++){
      if(large%i==0&&small%i==0){
          arr.push(i)
         
      } 
    }
    return Math.max(...arr)
    
};
console.log(findGCD(nums))