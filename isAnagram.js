/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let s = "anagram",
  t = "nagaram";

var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  const dictS = {},
    dictT = {};

  for (let i of s) {
    dictS[i] = dictS.hasOwnProperty(i) ? dictS[i] + 1 : 1;
  }
  for (let i of t) {
    dictT[i] = dictT.hasOwnProperty(i) ? dictT[i] + 1 : 1;
  }

  for (let key in dictS) {
    if (dictS[key] != dictT[key]) return false;
  }
  return true;
};

console.log(isAnagram(s, t));
