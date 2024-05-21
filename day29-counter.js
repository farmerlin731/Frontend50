// Concept: closure & default parameter

function createCounter(start = 0) {
  let counter = start;
  return () => counter++;
}

const counter = createCounter(5);
console.log(counter());
console.log(counter());
console.log(counter());
