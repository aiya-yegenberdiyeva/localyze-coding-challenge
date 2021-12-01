function maximumSum(nums) {
  if (nums.length == 0) {
    return null;
  }

  let maxSum = 0, maxStart = 0, maxEnd = 0;
  let currentSum = nums[0], currentStart = 0, currentEnd = 0;
  
  for (let i = 1; i < nums.length; i++) {
    if (currentSum + nums[i] > nums[i]) {
      currentEnd++;
      currentSum += nums[i];
    } else {
      currentStart = currentEnd = i;
      currentSum = nums[i];
    }

    if (currentSum > maxSum) {
      maxStart = currentStart;
      maxEnd = currentEnd;
      maxSum = currentSum;
    }
  }

  return [maxStart, maxEnd];
}

console.log(maximumSum([2, -4, 6, 8, -10, 100, -6, 5]));