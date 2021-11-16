const maximize = (fstNumber, scnNumber) => {
   let res = "";
   const digits1 = [...(fstNumber + "")];
   const digits2 = [...(scnNumber + "")].sort((a, b) => b - a);
   for (let i = 0; i < digits1.length; ++i) {
      let chosen;

      if (digits2[0] > digits1[i]) {
         res += digits2[0];
         digits2.shift();
      } else {
         res += digits1[i];
      }
   }
   return res;
};
console.log(maximize(8732, 91255));
