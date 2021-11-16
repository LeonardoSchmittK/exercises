// https://edabit.com/challenge/3kLXjsWRwH62Skt78

function scoreIt(str:string):number{
   const nums = str.replace(/[^0-9]/g,'')
   const res = [];
   const parenthesisIndexes = [];
   for(let i = 0;i<str.length;++i){
      const digit = str[i]; 
     if(str[i]==='('){
         parenthesisIndexes.push([str[i],i])
     }

     if(str[i]===')'){
         parenthesisIndexes.push([str[i],i])

     }
      
   }
      console.log(parenthesisIndexes);
      
   return 2
}


console.log(scoreIt("(5((10)8))")) // 20
