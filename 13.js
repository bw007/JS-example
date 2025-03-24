function pairsSumm(target, numbers = []) {
  const pairs = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) pairs.push([ numbers[i], numbers[j] ])
    }
  }

  return pairs
}

console.log(pairsSumm(5, [ 1, 2, 3, 5, 3, 2.5, 2.5 ]));