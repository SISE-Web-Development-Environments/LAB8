function do_the_thing_sync(arg, callback) {
  callback(arg);
  return 8;
}

function do_the_thing_async(arg, callback) {
  setTimeout(() => {
    callback(arg);
    return 8;
  }, 2000);
}

console.log(do_the_thing_sync(5, console.log));
console.log(do_the_thing_async(5, console.log));
// do_the_thing(5, (a) => console.log(a + 1));
