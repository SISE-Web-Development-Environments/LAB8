function factorial(x) {
  if (x == 0 || x == 1) return 1;
  return x * factorial(x - 1);
}

function factorial_promise(x) {
  return new Promise((res, rej) => {
    if (x < 0) rej("cannot accept negative number");
    res(factorial(x));
  });
}

factorial_promise(65)
  .then((r) => console.log(r))
  .catch((e) => console.log(e));

factorial_promise(-65)
  .then((r) => console.log(r))
  .catch((e) => console.log(e));

// console.log("The End?");

exports.factorial_promise = factorial_promise;
