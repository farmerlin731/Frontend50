const pairs = [
  ["explain", "this"],
  ["help", "you"],
  ["keep", "growing"],
];

// 覺得我這題用reduce來解，forloop更優雅 XD
function fromPairs(pairs) {
  const ans = pairs.reduce((compactObj, pair) => {
    const [key, value] = pair;
    compactObj[key] = value;
    return compactObj; // 竟然忘了reduce要return...
  }, {});

  return ans;
}

console.log(fromPairs(pairs));

function fromPairsFromExplain(pairs) {
  return Object.fromEntries(pairs);
}
