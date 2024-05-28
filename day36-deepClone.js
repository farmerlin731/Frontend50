// There r three ways to implement deepClone in JS.
// I am going to introducing them and explain it.

//First : JSON parse & stringfty.
function deepCloneByParse(obj) {
  return JSON.parse(JSON.stringify(obj));
}

//Second : by built-in function.
function deepCloneByBuiltin(obj) {
  return structuredClone(obj);
}

//Third : By hand ..
//Concept:
//Use recursion top-down to copy the node.
//Using cache let it be more effective.
//Learn how to extend from the original prototype.
//It doesn't matter the obj is array or not.
function deepCloneByHand(obj, cache = new WeakMap()) {
  if (cache.hasOwnProperty(obj)) return cache[obj];
  if (obj == null || typeof obj != "object") return obj;

  const clonedObj = Array.isArray(obj)
    ? []
    : Object.create(Object.getPrototypeOf(obj)); // importan!

  for (let key in obj) {
    clonedObj[key] = deepCloneByHand(obj[key]);
  }
  return clonedObj;
}

const objA = {
  a: 1,
  b: { c: 5 },
  d: [5, 3, { e: 8 }],
};

// console.log(Object.create(Object.getPrototypeOf(objA)));
const objB = deepCloneByParse(objA);
console.log(`First : ${objB.b == objA.b}`);

const objC = deepCloneByParse(objA);
console.log(`Second : ${objC.b == objA.b}`);

const objD = deepCloneByHand(objA);
console.log(`Third : ${objD.d == objA.d}`);
console.log(objD);
