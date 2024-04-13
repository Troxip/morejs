//Creation
// function simpleCallback1(success, cb) {
//   console.log("Callback Fn Called");
//   if (success) {
//     cb(null, "The operation was successful");
//   } else {
//     cb("The operation failed", null);
//   }
// }

// simpleCallback1(true, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
//   console.log("done");
// });

// const simplePromise = new Promise((resolve, rejected) => {
//   const success = true;
//   if (success) {
//     resolve("Operation was successful");
//   } else {
//     rejected("Operation failed!");
//   }
// });

// simplePromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function isEvenNumber(number, cb) {
  if (number % 2 === 0) {
    cb(null, `The number ${number} is even`);
  } else {
    cb(new Error(`The number ${number} is not even`));
  }
}

isEvenNumber(3, (err, result) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(result);
  }
});
