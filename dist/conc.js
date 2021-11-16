const isPalindrome = (n) => {
   const digits = [...(n + "")];
   const reversedDigits = [...digits].reverse();

   return digits.join("") === reversedDigits.join("");
};

const chain = (n, count = 0) => {
   const digits = [...(n + "")];
   const reversed = [...digits].reverse();
   const sum = Number(digits.join("")) + Number(reversed.join(""));
   console.log(sum);
   if (isPalindrome(sum)) {
      count = count + 1;
      return `${count} level`;
   } else {
      count = count + 1;
      return chain(sum, count);
   }
};

console.log(chain(56));
