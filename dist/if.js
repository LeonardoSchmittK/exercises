const users = [
   { name: "leo", age: 16, occupation: "dev" },
   { name: "leo", age: 56, occupation: "professor" },
   { name: "ed", age: 16, occupation: "dev" },
   { name: "lukas", age: 50, occupation: "mecanic" },
];

const query = ["dev"];

const getItemsBy = (list, property, value) => {
   return list.filter((user) => {
      const items = [...value];

      return items.includes(user[property]);
   });
};

const ordered = getItemsBy(users, "name", ["leo", "doctor"]).sort(
   (a, b) => a.age + b.age
);

console.log(ordered);
