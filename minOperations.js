const  s = "0100";
var minOperations = function(s) {
      let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            if (s[i] !== '0') count++;
        } else {
            if (s[i] !== '1') count++;
        }
    }
    return Math.min(count, s.length - count);
  
};
console.log(minOperations(s));