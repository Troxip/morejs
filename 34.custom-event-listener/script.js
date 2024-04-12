// const showMessage = () => {
//   console.log("Hello after 3 seconds");
// };

// setTimeout(() => {
//   showMessage();
// }, 3000);

// setTimeout(() => {
//   console.log("Hello after 3 seconds");
// }, 3000);

// let counter = 0;
// const intervalId = setInterval(() => {
//   counter++;
//   console.log(counter);

//   if (counter >= 5) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// console.log("Starting non Blocking Operations");

// for (let i = 0; i < 1e9; i++) {}

// console.log("Finished Blocking Operations");

console.log("Starting non Blocking Operations");

setTimeout(() => {}, 4000);
console.log("Finished non Blocking Operations");
