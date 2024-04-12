// const showMessage = () => {
//   console.log("Hello after 3 seconds");
// };

// setTimeout(() => {
//   showMessage();
// }, 3000);

// setTimeout(() => {
//   console.log("Hello after 3 seconds");
// }, 3000);

const timeOutId = setTimeout(() => {
  console.log("This will not displayed");
}, 5000);

console.log("Timeout scheduled");
clearTimeout(timeOutId);
console.log(timeOutId);

setInterval(() => {
  console.log("Hello");
}, 1000);
