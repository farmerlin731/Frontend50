//Concept: 'this' .
//How to set the 'counter' be private ?
//Oh.. you should use 'class' or 'closure'
function createCounterVerA(initValue = 0) {
  let result = {};
  result.counter = initValue;
  result.get = function () {
    return this.counter;
  };
  result.increment = function () {
    return ++this.counter;
  };
  result.decrement = function () {
    return --this.counter;
  };
  result.reset = function () {
    return (this.counter = initValue);
  };
  return result;
}

function createCounterClosure(initValue = 0) {
  let counter = initValue;
  const get = () => counter;
  const increment = () => ++counter;
  const decrement = () => --counter;
  const reset = () => (counter = initValue);

  return { get, increment, decrement, reset };
}

class createCounterClass {
  constructor(initValue = 0) {
    this.counter = initValue;
    this.initValue = initValue;
  }
  get() {
    return this.counter;
  }
  increment() {
    return ++this.counter;
  }
  reset() {
    return (this.counter = this.initValue);
  }
}
