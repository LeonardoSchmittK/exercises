const getResultOf = (expression:string):number =>{
   const digits = expression.split(' ');
   const operation = digits[0];
   const operands = [...digits.slice(1,digits.length)]
   console.log(operands);
   const result = operands.reduce((prevOperand:string,currentOperand:string):number=>{
      return Number(prevOperand)+Number(currentOperand)
      
   })

   
   return result
}

console.log(getResultOf('+ 2 2'))