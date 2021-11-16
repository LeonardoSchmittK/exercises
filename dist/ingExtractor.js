const ingExtractor = (str) => {
   const words = str.split(" ");
   const ingEndWords = [];
   const res = words.filter((word) => word.endsWith("ing"));
   return res;
};

console.log(ingExtractor("coming bringing Letting sing"));
