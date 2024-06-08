//First idea:
//Same property in two item, spread arr1's item first , then spread arr2s', it will overlap.
//At last sort by item.id
//Feel solution in Explain is better than mine XD

const arr1 = [
    { id: 1, x: 1, y: 3 },
    { id: 2, x: 9, y: 1 },
    { id: 5, test: 66666 },
  ],
  arr2 = [
    { id: 2, x: 66, z: 77 },
    { id: 3, x: 5 },
  ];

function joinArrayByMe(arr1, arr2) {
  const result = [...arr1];

  const idMap = arr1.reduce((acc, cur, index) => {
    acc.set(cur.id, index);
    return acc;
  }, new Map());

  for (const item of arr2) {
    if (idMap.has(item.id)) {
      const index = idMap.get(item.id);
      result[index] = {
        ...result[index],
        ...item,
      };
    } else {
      result.push(item);
    }
  }

  result.sort((a, b) => a.id - b.id);
  return result;
}

function joinArrayByExplain(arr1, arr2) {
  const joinedMap = new Map();

  for (const item of arr1) {
    joinedMap.set(item.id, item);
  }

  for (const item of arr2) {
    if (joinedMap.has(item.id)) {
      joinedMap.set(item.id, { ...joinedMap.get(item.id), ...item });
    } else {
      joinedMap.set(item.id, item);
    }
  }

  const result = Array.from(joinedMap.values()).sort((a, b) => a.id - b.id);
  return result;
}
// console.log(joinArrayByMe(arr1, arr2));
console.log(joinArrayByExplain(arr1, arr2));
