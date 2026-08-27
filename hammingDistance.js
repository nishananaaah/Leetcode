const  x = 1, y = 4
var hammingDistance = function(x, y) {
    let d = x ^ y;
    let count = 0;
    while (d !== 0) {
        d &= d - 1;
        count++;
    }
    return count;
};
console.log(hammingDistance(x, y));