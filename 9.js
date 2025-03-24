function palindrome(num) {
  let n = num;
  let rev = 0;

  for (let i = 0; n > 0; i++) {
    rev = (rev * 10) + n % 10;
    n = Math.floor(n / 10)
  }

  return rev === num && num >= 0;
}

console.log(palindrome(414));