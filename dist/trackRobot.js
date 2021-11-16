// https://edabit.com/challenge/jfpfpH6w42tZeRo2T

const trackRobot = (...coords) => {
   if (coords.length <= 1) {
      return [0, 0];
   } else {
      const finalPosition = [0, 0];
      let count = 0;
      coords.map((coord, id, arr) => {
         if (count === 0) {
            finalPosition[1] += coord;
         }

         if (count === 1) {
            finalPosition[0] += coord;
         }

         if (count === 2) {
            finalPosition[1] -= coord;
         }

         if (count === 3) {
            finalPosition[0] -= coord;
         }
         count = count + 1;
         if (count === 4) {
            count = 0;
         }
      });
      return finalPosition;
   }
};

console.log(trackRobot(20, 30, 10, 40));
console.log(trackRobot());
