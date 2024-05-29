// Concept:
// Also use the recursion to check deeper element.
// Need to concern 'Array' compare to 'Object'.
// No matter object or array , u still can check 'keys' in both type.
// I feel my answer is better than explainThis. XD

function isEqual(objA, objB) {
  if (typeof objA != typeof objB) return false;
  //Following is that both object are primitive.
  if (typeof objA != "object") return objA === objB;
  //Amount of keys are not the same.
  if (Object.keys(objA).length != Object.keys(objB).length) return false;
  //Need to concern A is Array and B is Object.
  if (Array.isArray(objA) != Array.isArray(objB)) return false;

  //Recursion check.
  for (let key in objA) {
    if (!isEqual(objA[key], objB[key])) return false;
  }

  return true;
}

console.log(isEqual({ 0: 1, 1: 2 }, [1, 2]));
console.log(
  isEqual({ a: 5, b: 100, c: { d: 7 } }, { a: 5, b: 100, c: { d: 7 } })
);
