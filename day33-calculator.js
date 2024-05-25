// Just need to know how to construct 'class'.
// And if u want to 'chain' the obj, u need to return 'this' at every methods.
// And should consider the situation of the divider being zero.
class calculator {
  constructor(number) {
    this.value = number;
  }
  add(number) {
    this.value += number;
    return this;
  }
  substract(number) {
    this.value -= number;
    return this;
  }
  multiply(number) {
    this.value *= number;
    return this;
  }
  divide(number) {
    if (number == 0) throw new Error("NaN");
    this.value /= number;
    return this;
  }
  power(number) {
    this.value = Math.pow(this.value, number);
    return this;
  }
  getResult() {
    return this.value;
  }
}

console.log(new calculator(10).add(3).substract(7).power(2).getResult());
