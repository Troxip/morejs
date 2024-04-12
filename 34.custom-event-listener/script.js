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

// console.log("Starting non Blocking Operations");

// setTimeout(() => {}, 4000);
// console.log("Finished non Blocking Operations");

// function logMessage(callback) {
//   callback();
// }

// logMessage(function () {
//   console.log("Hello this a simples Callback FN");
// });

// function logMessage(callback) {
//   const test = callback();
//   return test;
// }

// const test1 = logMessage(() => {
//   return "Hello Bitch";
// });

// console.log(test1);

// const logMessageHOF = (callback) => {
//   const greeting = callback("Agnes", "Agge");
//   return greeting;
// };

// const logMessageCallbackFn = (firstName, lastName) => {
//   return `Hello ${firstName} ${lastName} this is a simples cb`;
// };

// const test = logMessageHOF(logMessageCallbackFn);
// console.log(test);

const calculateSumHOF = (a, b, callback) => {
  const result = a + b;
  callback(result);
};

calculateSumHOF(2, 3, (result) => {
  console.log(result);
});
