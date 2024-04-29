// something u need to concern
// 1.start&end 負數的情況
// 2.end比start小的情況
// 3.end超出array長度的情況
// 3.要回傳新的array還是針對原array做操作？後者的話需要return什麼？
// 4.start&end 的 default

function fill(array, value, start = 0, end = array.length) {
  start = start < 0 ? start + array.length : start;
  end = end < 0 ? end + array.length : end;
  end = end > array.length ? array.length : end;
  if (end < start) {
    [start, end] = [end, start];
  }
  for (let i = start; i < end; i++) {
    array[i] = value;
  }

  console.log(array);
}

fill([1, 2, 3], "*"); // ['*', '*', '*']
fill([1, 2], "*", 2, 3); // [1, 2]
fill([1, 2, 3, 4, 5], "*", 1, -1); // [1, '*', '*', '*', 5]
