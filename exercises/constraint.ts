// https://edabit.com/challenge/yeevEvr7SKTtbekKm

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function constraint(sentence:string):string{
   const onlyWords = sentence.replace(/["`!@#$%¨&*(){}^~;/.]+/gi,'')
   const originalSentence = sentence;
   const words = onlyWords.split(' ')
   const letters = onlyWords.split('');
   const firstLetterEachWord = [];


   const nonRepetitiveLetters = alphabet.filter((item)=>letters.includes(item))
   if(nonRepetitiveLetters.length===alphabet.length){
      return 'Pangram'
   }
   
   for(let i=0;i<words.length;++i){
         firstLetterEachWord.push(words[i][0].toLocaleLowerCase())
   }
   const nonRepetitive = [...new Set(firstLetterEachWord)]

   if(nonRepetitive.length===1){
      return "Tautogram"
   }
      
   return "sentence"
}


const sample = constraint("The quick brown fox jumps over the lazy dog.")
console.log(sample);
