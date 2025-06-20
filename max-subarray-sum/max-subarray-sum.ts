export interface MaxSubarrayResult {
  maxSum: number;
  subarray: number[];
}

export function maxSubarraySum(nums: number[]): MaxSubarrayResult {
  if (nums.length === 0) return { maxSum: 0, subarray: [] };

  let maxSum = nums[0]!;
  let currentSum = nums[0]!;
  let tempStart = 0;
  let start = 0;
  let end = 0;

  for (let i = 1; i < nums.length; i++) {
    if (currentSum < 0) {
      currentSum = nums[i]!;
      tempStart = i;
    } else {
      currentSum += nums[i]!;
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }

  const subarray = nums.slice(start, end + 1);

  return {
    maxSum,
    subarray,
  };
}

export function maxSubarraySumWithIndices(nums: number[]): {
  maxSum: number;
  startIndex: number;
  endIndex: number;
  subarray: number[];
} {
  const result = maxSubarraySum(nums);
  let startIndex = -1;
  let endIndex = -1;

  for (let i = 0; i <= nums.length - result.subarray.length; i++) {
    let match = true;
    for (let j = 0; j < result.subarray.length; j++) {
      if (nums[i + j] !== result.subarray[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      startIndex = i;
      endIndex = i + result.subarray.length - 1;
      break;
    }
  }

  return {
    maxSum: result.maxSum,
    startIndex,
    endIndex,
    subarray: result.subarray,
  };
}
