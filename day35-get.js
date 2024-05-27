// Concept :
// You can see 'a[0]' as TWO properties : property 'a' in first-layer object and property '0' in second-layer array.
// How to use split(regex) to transcript the path.
// Set the index to achieve the correct layer.
const object = { a: [{ b: { c: { d: 100 } } }] };
const path = "a[0].b.c";

function get(object, pathParam, defaultValue = "Non-exist.") {
  if (object == null) return defaultValue;
  //Transcript the pathParam to string and remove the empty item.
  const path = Array.isArray(pathParam)
    ? pathParam
    : pathParam.split(/[\.\[\]]/).filter(Boolean);

  //While-loop to discover the deeper obj.
  let index = 0;
  let result = object;
  while (typeof result == "object" && index < path.length) {
    result = result[path[index]];
    index++;
  }

  return index == path.length && result != undefined ? result : defaultValue;
}

console.log(get(object, path, "hahaha"));
