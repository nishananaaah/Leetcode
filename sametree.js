const p=[1,2,1];
const q=[1,1,2];
function sameTree(p,q){
     if(p.length!==q.length){
         return false;
     }
     for(let i=0;i<p.length;i++){
         if(p[i]!==q[i]){
             return false;
         }
     }
     return true;
    
}
console.log(sameTree(p,q));