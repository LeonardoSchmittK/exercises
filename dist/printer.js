const printerError = (str) => {
   const possible = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
   ];
   const lowered = str.toLowerCase();
   const digits = [...lowered];
   const mistakenDigits = digits.filter(
      (digit) => !possible.includes(digit)
   );
   return `${mistakenDigits.length}/${str.length}`;
};

console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
