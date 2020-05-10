const allGood = undefined;

const p = new Promise((resolve, reject) => {
  if (allGood) resolve("success");
  else reject(new Error("oops something went wrong"));
});

p.then((res) => console.log(res)).catch((err) => console.log(err.message));
