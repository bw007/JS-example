function digitCount(num) {
  if (num > 0 && num < 1000) {
    return num % 10 < num ? 2 : (num % 100 < num ? 3 : 1)
  }
  return 0
}


console.log(digitCount(20));
console.log(digitCount(2));
console.log(digitCount(15));
console.log(digitCount(1000));
console.log(digitCount(0));
console.log(digitCount(123));
console.log(digitCount(999));
