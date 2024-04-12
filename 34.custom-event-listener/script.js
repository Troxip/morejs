const divideNumbers = (dividen, divisor, callback) => {
  setTimeout(() => {
    if (divisor === 0) {
      callback(new Error("Cannot divide by zero"), null);
    } else {
      callback(null, dividen / divisor);
    }
  }, 1000);
};

divideNumbers(10, 2.3, function (error, result) {
  if (error) {
    console.log("Error:", error.message);
    return;
  } else {
    console.log("Result:", result);
  }
});
