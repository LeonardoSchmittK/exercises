//https://medium.com/algorithms-and-leetcode/greedy-algorithm-explained-using-leetcode-problems-80d6fee071c4

/**
 * @param {number[]} intervals
 * @return {number}
 */
function overlap(intervals) {
   let count = 0;
   intervals.map((item, id, arr) => {
      console.log(item);
      if (id === arr.length - 1) {
         return;
      } else {
         if (arr[id + 1][0] <= arr[id][0]) {
            count = count + 1;
         }
      }
   });
   return count;
}

console.log(
   overlap([
      [1, 2],
      [2, 3],
   ])
);
