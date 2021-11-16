const convert = (str:string):string => {
   const parts = str.split(' ')
   if(parts[0]==='function'){
      console.log(str.indexOf("function"));
   }
   console.log(parts);
   
   return str
}

console.log(convert("function () {}"));
