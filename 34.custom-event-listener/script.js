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

// function isEvenNumber(number, cb) {
//   if (number % 2 === 0) {
//     cb(null, `The number ${number} is even`);
//   } else {
//     cb(new Error(`The number ${number} is not even`));
//   }
// }

// isEvenNumber(3, (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });

// function isEvenNumPromise(number) {
//   return new Promise((resolve, reject) => {
//     if (number % 2 === 0) {
//       resolve(`Number ${number} is even`);
//     } else {
//       reject(`Number ${number} is not even`);
//     }
//   });
// }

// isEvenNumPromise(3)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function stepOnePromise() {
  return new Promise((resolve) => {
    resolve("No");
  });
}
function stepTwoPromise(result) {
  return new Promise((resolve, reject) => {
    if (result === "Yes") {
      reject("You are banned");
    } else {
      resolve("Step Two completed");
    }
  });
}
function stepThreePromise() {
  return new Promise((resolve) => {
    resolve("Step Three completed");
  });
}

stepOnePromise()
  .then((resultFromPromiseOne) => {
    console.log(resultFromPromiseOne);
    return stepTwoPromise(resultFromPromiseOne);
  })
  .then((resultFromPromiseTwo) => {
    console.log(resultFromPromiseTwo);
    return stepThreePromise();
  })
  .then((resultFromPromiseThree) => {
    console.log(resultFromPromiseThree);
  })
  .catch((err) => console.log(err));
