//First Idea:
//Use recursion and judge the input is Obj/Array/Primitive Value.

function compact(obj) {
  if (typeof obj !== "object" || obj == null) return obj;
  let result;
  if (Array.isArray(obj)) {
    //Input is an array.
    for (const item of obj) {
      if (compact(item)) {
        result.push(compact(item));
      }
    }
    // result = obj.map((item) => compact(item)).filter(Boolean);
  } else {
    //Input is a object.
    result = {};
    for (const key in obj) {
      if (compact(obj[key])) {
        result[key] = compact(obj[key]);
      }
    }
  }

  return result;
}

const obj = [null, 0, false, 1];
// const obj = { a: null, b: [false, 1] };

console.log(compact(obj));
