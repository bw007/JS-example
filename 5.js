function allPositions(...nums) {
  let positiveCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) positiveCount++;
  }
  return positiveCount == nums.length
}

console.log(allPositions(1, 2, 3, -1));
