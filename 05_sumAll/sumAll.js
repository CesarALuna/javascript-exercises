const sumAll = function (a, b) {
  // no non-numbers
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  // no negative numbers
  if (a < 0 || b < 0) return "ERROR";

  // if a is larger than b, we need them to trade places
  if (a > b) {
    const temp = a;
    a = b;
    b = temp;
  }
  // initialize sum
  let sum = 0;
  //    for loop. i starts at smaller value
  //    while i is smaller than larger value +1
  //    iterating 1 at a time
  //    add the value of i to sum
  for (let i = a; i < b + 1; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
