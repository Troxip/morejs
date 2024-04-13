//Creation
function simpleCallback(success, cb) {
  console.log("Callback Fn Called");
  if (success) {
    cb(null, "The operation was successful");
  } else {
    cb("The operation failed", null);
  }
}

simpleCallback(true, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
  console.log("done");
});
