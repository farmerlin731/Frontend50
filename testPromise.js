function testPromise() {
  return new Promise((resolve, reject) => {
    let tmp = Math.random();
    console.log(tmp);
    if (tmp > 0.5) {
      resolve("Greater");
    } else {
      reject("smaller");
    }
  });
}

testPromise()
  .then((res) => console.log(`ans:${res}`))
  .catch((err) => console.log(`ohno:${err}`));
testPromise()
  .then((res) => console.log(`ans:${res}`))
  .catch((err) => console.log(`ohno:${err}`));
testPromise()
  .then((res) => console.log(`ans:${res}`))
  .catch((err) => console.log(`ohno:${err}`));
