function findSecondMax(arr = []) {
  let max1 = -Infinity;
  let max2 = -Infinity;

  if (arr.length < 2) return "Kamida 2 ta bir xil bo'lmagan son bo'lsin";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2 && arr[i] !== max1) {
      max2 = arr[i];
    }
  }
  return max2;
}

console.log(findSecondMax([1, 1]));