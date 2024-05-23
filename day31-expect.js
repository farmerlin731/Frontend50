// First Idea: Return one obj includes two functions (tobe & notobe).
// Learn : how to throw the error msg.

function expect(valueA) {
  return {
    toBe: (valueB) => {
      if (valueA !== valueB) {
        throw new Error("Not Equal!");
      } else {
        return true;
      }
    },
    notToBe: (valueB) => {
      if (valueA === valueB) {
        throw new Error("They r equal!");
      } else {
        return true;
      }
    },
  };
}

// Test
try {
  expect(5).toBe(6);
} catch (e) {
  console.log(e.name);
  console.log(e.message);
}
