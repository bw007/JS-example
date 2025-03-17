function digitCount(num) {
  if (num > 0 && num < 1000) {
    let count = 0;
    let n = num;
    while (n !== 0) {
      count++;
      n = Math.floor(n / 10);
    }
    return count
  }
  return "none"
}

console.log(digitCount(1));
console.log(digitCount(22));
console.log(digitCount(99));
console.log(digitCount(146));
console.log(digitCount(999));

