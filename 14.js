function sortNumber(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [ arr[i], arr[j] ] = [ arr[j], arr[i] ]
      }
    }
  }
  return arr
}

console.log(sortNumber([2, 1, 3, 1, 0, 5]));