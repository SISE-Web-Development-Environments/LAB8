function factorial_promise(x) {
  //TODO: add your code here
}

factorial_promise(65)
  .then((r) => console.log(r))
  .catch((e) => console.log(e));

factorial_promise(-65)
  .then((r) => console.log(r))
  .catch((e) => console.log(e));

// console.log("The End?");

exports.factorial_promise = factorial_promise;
