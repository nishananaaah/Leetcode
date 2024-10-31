var sumOfUnique = function (nums) {
    return nums.filter(num => nums.indexOf(num) === nums.lastIndexOf(num)).reduce((acc, num) => acc + num, 0)
};
const nums = [1,2,3,2];
console.log( sumOfUnique(nums))