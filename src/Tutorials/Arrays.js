const arrayEmpty = new Array(2);
console.log(arrayEmpty.length); // 2
console.log(arrayEmpty[0]); // undefined; actually, it is an empty slot

const arrayOfOne = new Array("2"); // Not the number 2 but the string "2"

console.log(arrayOfOne.length); // 1
console.log(arrayOfOne[0]); // "2"

const fruits = new Array("Apple", "Banana");

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"

/* <---------   Create dynamic arrays ---------->  */

Array.from({ length: 50 }, (_, index) => ({
  name: "rohit",
  position: index + 1,
}));
new Array(50)
  .fill()
  .map((_, index) => ({ name: "rohit", position: index + 1 }));
