// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddleCharacter(str:string):string{
   const strLen = str.length;
   const strHalfLen = Math.round(strLen/2);
  strLen % 2 ===0 ? 'even':'odd';
    const characters = [...str];

   return  strLen % 2 !==0 ? characters[strHalfLen-1]:`${characters[strHalfLen-1]}${characters[strHalfLen]}`
}

console.log(getMiddleCharacter("middle"));
