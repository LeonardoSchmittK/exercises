function nextSquare(n:number,count:number=0):number{
  if(count===0){
     if(!Number.isInteger(Math.sqrt(n))){
      return -1
   }
  }
    if(Number.isInteger(Math.sqrt(n)) && count!==0){
       
       return n
    }else {
      n = n+1
      count = count + 1;
      
      return nextSquare(n,count)
    }
   
   
}

console.log(nextSquare(625));
