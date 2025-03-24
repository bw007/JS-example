// 40% AI yordami bilan yechilgan
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



// Men bilgan noprofessional yechim
function sortNumber(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [ arr[i], arr[j] ] = [ arr[j], arr[i] ]
      }
    }
  }
  return arr[arr.length - 2]
}

console.log(sortNumber([2, 1, 3, 1, 0, 5]));