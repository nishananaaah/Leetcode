const arr = [1,2,3,4,5], size = 3;

const chunk = (arr, size) => {
  const chunkedArray = [];

  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size));
  }

  return chunkedArray;
};
    
console.log(chunk(arr, size))