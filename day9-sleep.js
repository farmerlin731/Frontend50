function sleep(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Better way : set 'resolve' as the callback funtion.
      // aka setTimeOut(resolve(),value)
      resolve();
    }, value);
  });
}

console.log("Explain");
sleep(3000).then(() => {
  console.log("This"); // Only logs after 3 seconds
});
console.log("--next step--");

// The following usage is wrong
// You can't use 'await' in the main thread
// await sleep(3000);
