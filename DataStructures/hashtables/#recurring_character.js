//Given an array [2, 5, 1, 2, 3, 5, 1, 2, 4]
//Should return 2
//return first recurring character

// O(n^2) -> using double loops

// O(n)
function findRecurring(elements) {
  const temp = {};
  for (const element of elements) {
    if (temp[element]) return element;
    else temp[element] = true;
  }
  return undefined;
}

const result = findRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4]);
const result2 = findRecurring([2, 3, 4, 5]);
console.log(result, result2);
