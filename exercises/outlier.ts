const getOutlier = (integers:number[]):string => {
   const odd = integers.filter((int)=>int%2!==0);
   const even = integers.filter((int)=>int%2===0);

   console.log(odd);
   console.log(even);
   
   const outlier = odd.length===1 ? odd[0] : even[0];

   
   return `${outlier} (the only ${outlier%2===0?"even":"odd"})`
}

console.log(getOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
