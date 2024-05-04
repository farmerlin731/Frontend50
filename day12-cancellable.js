// fn:functon, args:array of arguments, t:time(ms) of the delay time
function cancellable(fn, args, t) {
  const timeID = setTimeout(() => fn(...args), t);
  return () => {
    clearTimeout(timeID);
  };
}

// Test
let fn = (x) => {
    console.log(x * 5);
    return x * 5;
  },
  args = [2],
  t = 1000;

const cancellFn = cancellable(fn, args, t);
// setTimeout(cancellFn, 500);
setTimeout(cancellFn, 2000);
