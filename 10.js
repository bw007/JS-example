function digitSumm(num) {
  let summ = 0;
  let n = num
  while (n != 0) {
    summ += n % 10;
    n = Math.floor(n / 10)
  }
  return summ
}

console.log(digitSumm(120));