function findCount(n, arr = []) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) count++;
  }
  return `Bu yerda ${count} ta ${n} soni bor.`;
}

console.log(findCount(2, [ 0, 2, 3, 2, 2, 45, 2 ]));