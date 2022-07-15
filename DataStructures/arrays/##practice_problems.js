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
