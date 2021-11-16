// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(sentence:string):string{
   const res:string[] = [];
   const chars = sentence.split('');

   
   chars.map((char,charId, thisArr)=>{
      const initialLetter = char.toUpperCase();
      const finalLetters = new Array(charId).fill(char.toLowerCase())
      const batch = [initialLetter,...finalLetters].join('')
      res.push(batch)
      
   })
   
   return res.join('-')
}

console.log(accum("RqaEzty"));
