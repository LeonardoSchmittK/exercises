// https://www.codewars.com/kata/5ce399e0047a45001c853c2b

const sumOfParts = (nums:number[],parts:number[]=[]):number[]=>{
   if(nums.length===1){
      parts.push(nums[0],0)
      return parts
   }else {
      const sum = nums.reduce((a,b)=>a+b);
      parts.push(sum)
      nums.shift()
     return sumOfParts(nums,parts)
   }
   
}

console.log(sumOfParts([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]));
