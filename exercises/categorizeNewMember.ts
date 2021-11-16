// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function categorizeNewNumber(members:[number,number][]):string[]{
   const res:string[] = [];

   members.forEach((member)=>{
      const [age,handicap] = [member[0],member[1]]

      if(age>55 && handicap>7){
         res.push('Senior')
      }else {
         res.push('Open')
      }
   })

   return res
}


console.log(categorizeNewNumber([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]))
