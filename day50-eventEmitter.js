//The Same As Day 45 XD

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
      if (index != -1) cbFuncs.splice(index, 1);
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
tmpEmitter.subscribe("first", (a, b) => a + b);

console.log(tmpEmitter.emit("first", [3, 66]));
console.log(tmpEmitter.emit("second"));
