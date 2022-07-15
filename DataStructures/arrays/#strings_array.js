// INTERVIEW STRING QUESTION SHOULD BE TREATED AS ARRAY QUESTIONS

// FUNCTION to reverse a string

function reverse(str) {
  if (!str || str.length < 2 || typeof str != "string")
    throw new Error("Ïnvalid String");

  let lp = 0,
    up = str.length;
  const strArr = str.split(""); // O(n) | O(n * k) if delimeter length

  // O(n) -> Complexity
  while (lp < up) {
    let val = strArr[lp];
    strArr[lp] = strArr[up];
    strArr[up] = val;
    lp++;
    up--;
  }

  return strArr.join("");
}

function reverseAlt(str) {
  return [...str].reverse().join("");
}

console.log(reverse("bipin"));
console.log(reverse("bipin gosain"));
console.log(reverseAlt("good morning"));
