// Note 1 : You can see 'a[0]' as TWO properties : property 'a' in object and property '0' in array.
// Note 2 : How to use split(regex) to recognize the path.
function get() {}

//==dayXX==
const objects = [{ a: 1 }, { b: 2 }];

let tmp = JSON.stringify(objects);
let ans = JSON.parse(tmp);
let ans2 = structuredClone(objects);
console.log(ans2);
console.log(ans2[0] == objects[0]);

// First idea: using 'Recursion',
// And Top-Botton to copy the node.
// The thought is right, but the detail is wrong XD
// The concept of 'Cache' in recursion is very important.
// And how to extend the original prototype.
function deepCloneMe(obj) {
  const result = [];
  if (Array.isArray(obj)) {
    for (const item of obj) {
      result.push(item);
    }
  } else if (typeof Object) {
    for (let key in obj) {
      result[key] = obj[key];
    }
  } else {
    return obj;
  }

  return result;
}

//==dayXX==
//isEqual
//Recursion?
