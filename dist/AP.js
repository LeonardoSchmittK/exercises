const findMissing = (arr) => {
   const pattern = arr[2] - arr[1];
   const sequence = [];
   for (let i = 0; i < arr.length - 1; ++i) {
      sequence.push(arr[i + 1] - arr[i]);
   }
   const res = [];
   // var map = sequence.reduce(function (obj, b) {
   //    obj[b] = ++obj[b] || 1;
   //    return obj;
   // }, {});
   const nonRepeated = [...new Set(sequence)];
   const mostAppeared = nonRepeated.sort((a, b) => a - b)[0];

   for (let i = arr[0]; i <= arr[arr.length - 1]; i += mostAppeared) {
      res.push(i);
   }
   const result = [...arr, ...res];
   const nonRepeatedd = res.filter((q) => !arr.includes(q));
   return nonRepeatedd;
};

console.log(findMissing([1, 3, 5, 9, 11]));
