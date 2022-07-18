// *** PROBLEM 1 ***
var twoSum = function (nums, target) {
  const result = {};
  let index = 0;
  for (let num of nums) {
    //get the positive value for the difference
    const existingVal = result[target - num];

    //check if the req value exist in object
    if (existingVal !== undefined) return [existingVal, index];

    //it doesn't just save the current item with its index in the object
    result[num] = index++;
  }
};

// *** PROBLEM 2 ***
// LARGEST CONTIGUOUS SUBARRAY
//O(n^3)
var subArray = (nums) => {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      let sum = 0;
      for (let k = i; k < j; k++) {
        sum += nums[k];
      }
      if (sum > max) max = sum;
    }
  }
  return max;
};

// *** PROBLEM 3 ***

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// S-> O(n) | T-> O(n)
var rotate1 = function (nums, k) {
  const copy = [...nums]; //copy the array

  let actualK = k % nums.length; //so that if rotation is more than length it should wrap up
  let index = 0;
  let indexToPart = copy.length - actualK;
  for (let i = indexToPart; i < copy.length; i++) {
    //from indexToPart to end
    nums[index] = copy[i];
    index++;
  }

  for (let i = 0; i < indexToPart; i++) {
    //from beginning to indexToPart
    nums[index] = copy[i];
    index++;
  }
};

// S -> O(1) T -> O(n * k)
var rotate = function (nums, k) {
  let actualK = k % nums.length;
  let indexToPart = nums.length - actualK;

  for (let i = 0; i < indexToPart; i++) {
    for (let j = 0, len = nums.length; j < len - 1; j++) {
      let temp = nums[j + 1];
      nums[j + 1] = nums[j];
      nums[j] = temp;
    }
  }
};

//just to reverse a subarray
function bubbleReverse(nums, start, end) {
  let ip = start;
  let ep = end;
  while (ip < ep) {
    let temp = nums[ip];
    nums[ip] = nums[ep];
    nums[ep] = temp;
    ip++;
    ep--;
  }
}

var rotate = function (nums, k) {
  let actualK = k % nums.length;
  let indexToPart = nums.length - actualK;

  bubbleReverse(nums, 0, indexToPart - 1);
  bubbleReverse(nums, indexToPart, nums.length - 1);
  bubbleReverse(nums, 0, nums.length - 1);
};
