const command  = "G()(al)";
var interpret = function(command){
    let command2=command.split('')
   let ans ='';
  for(let i=0;i<command2.length;i++){
      if(command2[i]=='('&&command2[i+1]==')'){
          ans+='o'
      }
      if(command2[i]!='('&&command2[i]!=')'){
          ans+=command2[i]
      }
  }
  return ans
    
};
console.log(interpret(command))