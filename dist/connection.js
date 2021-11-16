// https://edabit.com/challenge/J6ZGG6AvXQzqRpRsy

const sharedLetters = (words) => {
   const arr = [];
   let count = 0;
   words.map((word, id) => {
      if (count === 0) {
         arr.push(word);
      } else {
         const lastLetter = words[id - 1][words[id - 1].length - 1];
         const place = word.indexOf(lastLetter);
         console.log(lastLetter);
         arr.push(word.slice(place + 1, word.length + 1));
      }
      count = count + 1;
   });

   return arr;
};

console.log(sharedLetters(["move", "over", "very"]));
