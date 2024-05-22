// Something I missed: 'null' situation.
// And 'Array' compared to 'Object'.
// But u still can check 'keys' in array,
// I feel my answer is better. XD

function isEqual(objA, objB) {
  if (typeof objA != typeof objB) return false;
  if (typeof objA != "object") return objA === objB;
  if (Object.keys(objA).length != Object.keys(objB).length) return false;

  for (let key in objA) {
    if (!isEqual(objA[key], objB[key])) return false;
  }

  return true;
}

console.log(isEqual({ 0: 1, 1: 2 }, [1, 2]));
