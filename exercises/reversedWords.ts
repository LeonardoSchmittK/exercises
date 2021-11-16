// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

const reversedWords = (sentence:string):string => {

   const words = sentence.split(' ');
   const reversedWordsArray:string[] = [];

   words.map((word)=>{
      const digits = [...word]
      const reversedWord = digits.reverse()
      
      reversedWordsArray.push(reversedWord.join(''))
   })

    return reversedWordsArray.join(' ')
}

console.log(reversedWords("double  spaces"));
