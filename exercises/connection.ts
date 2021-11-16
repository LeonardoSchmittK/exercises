// https://edabit.com/challenge/J6ZGG6AvXQzqRpRsy



const sharedLetters = (words:string[]):[string,number]=>{
   const arr:string[] = [];


   function sliceWord (word:string,letter:string){
      console.log(word,letter);
      
      // if(word[0]===letter){
      //    return 'eleleoele'
      // }else{
      //    let newLetter =word.slice(1,word.length)
      //    console.log(newLetter);
      //    sliceWord(newLetter,letter);
      // }
   }

   words.map((word,id,arr)=>{
      if(id<words.length){
        const x = sliceWord(words[id+1],word[word.length-1])
      console.log(x); 
      }
      
      
   })

   // const str = 'over';
   // const x = sliceWord(words[1],words[0][words[0].length-1])
   // console.log(':::');
   
   // console.log(str+x);
   

   return ['opa',5]
}


console.log(sharedLetters(["move", "over", "very"]) );
