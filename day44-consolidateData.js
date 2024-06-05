//First Idea:
//Create an empty array, then iterate the input, push each element to the array.
//Create a map, key is 'user', value is the index of new array. -> key point!
//Use 'Set' for 'book' ? but how to maintain the order? -> ok, u can sort XD
//Important: Maintain content immutable!

const sessions = [
  { user: 8, duration: 50, books: ["The Hobbit"] },
  { user: 7, duration: 150, books: ["Pride and Prejudice"] },
  { user: 1, duration: 10, books: ["The Lord of the Rings"] },
  { user: 7, duration: 100, books: ["The Great Gatsby", "Animal Farm"] },
  { user: 7, duration: 200, books: ["The Great Gatsby"] },
  { user: 2, duration: 200, books: ["1984"] },
  { user: 2, duration: 200, books: ["The Great Gatsby"] },
];

function consolidateData(sessions) {
  const newArray = [];
  const userMap = new Map();

  sessions.forEach(({ user, duration, books }) => {
    if (!userMap.has(user)) {
      userMap.set(user, newArray.length);
      newArray.push({ user, duration, books });
    } else {
      const index = userMap.get(user);
      newArray[index] = {
        user,
        duration: duration + newArray[index].duration,
        books: Array.from(new Set(newArray[index].books.concat(books))).sort(),
      };
    }
  });

  //   console.log(userMap);
  return newArray;
}

const solidSession = consolidateData(sessions);
console.log(solidSession);
// console.log("----input----");
// console.log(sessions);
