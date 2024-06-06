//First Idea:
//Set a map in a attribute, key is 'event name', value is 'callback function'(array?).
//Unsubscribe is function for removing key ? return the refs?
//How to deal with the situation of two cb-function ? -> use splice

class EventEmitter {
  constructor() {
    this.eventMap = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.eventMap.has(eventName)) {
      this.eventMap.set(eventName, []);
    }

    const cbFuncs = this.eventMap.get(eventName);
    cbFuncs.push(callback);
    return () => {
      const index = cbFuncs.indexOf(callback);
      index != -1 && cbFuncs.splice(index, 1);
    };
  }

  emit(eventName, args = []) {
    if (!this.eventMap.has(eventName)) {
      return [];
    }
    const results = [];
    const cbFuncs = this.eventMap.get(eventName);
    cbFuncs.forEach((func) => {
      results.push(func(...args));
    });
    return results;
  }
}

//TEST
const tmpEmitter = new EventEmitter();

tmpEmitter.subscribe("first", () => 5);
const unsubscribe = tmpEmitter.subscribe("first", () => 6);
unsubscribe();
unsubscribe();
tmpEmitter.subscribe("first", (a, b) => a + b);

console.log(tmpEmitter.emit("first", [3, 66]));
console.log(tmpEmitter.emit("second"));
