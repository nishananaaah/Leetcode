const address="1.1.1.1";
var defangIPaddr = function(address) {
    let result=''
    let add=address.split('');
    for(let i=0;i<add.length;i++){
        if(add[i]=='.'){
            result+='[.]'
            
        }else{
            result+=add[i]
        }
    }
    return result;
};
console.log(defangIPaddr(address))