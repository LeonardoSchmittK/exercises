const putDigitsInOrder = (digit:string):string => {
   const digits = [...digit];
   const numbers = digits.map((d)=>+d);
   const sortedNumbers = numbers.sort((a,b)=>b-a);
   return sortedNumbers.join('')
}

console.log(putDigitsInOrder('145263 '));
