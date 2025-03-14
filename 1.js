let a = 1;
let b = 2;
let c = 3;

function threeDigit(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return 0;
  return a * 100 + b * 10 + c
}

console.log(threeDigit(a, b, c));