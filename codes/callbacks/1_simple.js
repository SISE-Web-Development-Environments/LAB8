function do_the_thing(arg, callback) {
  callback(arg);
}

// function do_the_thing(arg, callback) {
//   setTimeout(() => callback(arg), 2000);
// }

do_the_thing(5, console.log);
// do_the_thing(5, (a) => console.log(a + 1));
