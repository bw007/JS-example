function digitNumber(num) {
  let count = 0;
  let n = num;
  while (n !== 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
}

console.log(digitNumber(123456));
