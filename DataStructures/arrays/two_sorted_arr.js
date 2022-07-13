// COMPLEXITY -> O(n) length of longest array
function mergeSortedArray(a1, a2) {
  if (a1.length == 0) return a2;
  if (a2.length == 0) return a1;

  const mergedArr = [];
  let sp1 = 0;
  let sp2 = 0;

  while (sp1 < a1.length && sp2 < a2.length) {
    if (a1[sp1] < a2[sp2]) {
      mergedArr.push(a1[sp1]);
      sp1++;
    } else {
      mergedArr.push(a2[sp2]);
      sp2++;
    }
  }
  while (sp1 != a1.length) {
    mergedArr.push(a1[sp1]);
    sp1++;
  }
  while (sp2 != a2.length) {
    mergedArr.push(a2[sp2]);
    sp2++;
  }
  return mergedArr;
}

console.log(mergeSortedArray([0, 3, 4, 4, 31], []));

console.log(mergeSortedArray([0, 3, 4, 4, 31], [1, 2, 3, 4]));

console.log(mergeSortedArray([0, 1000], [1, 2, 3, 4, 100, 200, 200]));
