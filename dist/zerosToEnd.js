const zeroesToEnd = (arr) => {
   const noZeros = arr.filter((item) => item !== 0);
   const zeros = arr.filter((item) => item === 0);
   const res = [...noZeros, ...zeros];
   return res;
};

console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5]));
