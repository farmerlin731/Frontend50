function intervalCancell(fn, args, t) {
  let count = 0;

  // SetInterval wouldn't invoke function when time = 0 .
  fn(...args);
  console.log(`Time: ${t * count++}`);

  const timeId = setInterval(() => {
    fn(...args);
    console.log(`Time: ${t * count++}`);
  }, t);
  return () => clearInterval(timeId);
}

const cancelTimeMs = 220;
const cancelFn = intervalCancell((x) => console.log(x * 2), [4], 35);
setTimeout(cancelFn, cancelTimeMs);
