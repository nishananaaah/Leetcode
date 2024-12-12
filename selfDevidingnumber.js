const left = 1, right = 22;
var selfDividingNumbers = function(left, right) {
    let arr = [];
       for(let i=left;i<=right;i++){
           let flag = true ;
           if(i>=10){
            let split = i.toString().split('')
            for(let j=0;j<split.length;j++){
                if(i%split[j]!==0){
                    flag=false
                }
            }if(flag&&i%10!=0){
                arr.push(i)
            }
             
         }else{
             arr.push(i)
         }
       
       }
       return arr
}
console.log(selfDividingNumbers(left,right));