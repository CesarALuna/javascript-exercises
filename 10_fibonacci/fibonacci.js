const fibonacci = function (count) {
  // fib sequence cannot start at less than zero or zero
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  // initialing first part of fibonacci sequence (0+1)
  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    // temp is the newer value (second value); temporary holding spot for that value
    const temp = b;
    // the new 'b' value is calculated by adding the prev and next values in sequencee
    b = a + b;
    // a is now holding the temp value
    a = temp;
  }
  return b;
  w;
};

// Do not edit below this line
module.exports = fibonacci;
