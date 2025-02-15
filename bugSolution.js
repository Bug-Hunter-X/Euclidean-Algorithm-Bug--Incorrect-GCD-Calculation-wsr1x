function foo(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  if (b === 0) {
    return a;
  }
  if (a === 0) {
    return b;
  }
  if (a === b) {
    return a;
  }
  if (a > b) {
    return foo(a - b, b);
  }
  return foo(a, b - a);
}

console.log(foo(12, 18)); // Output: 6
console.log(foo(15, 25)); // Output: 5
console.log(foo(25, 15)); // Output: 5
console.log(foo(20, 10)); // Output: 10
console.log(foo(30, 40)); // Output: 10
console.log(foo(-12, 18)); // Output: 6
console.log(foo(12, -18)); // Output: 6
console.log(foo(-12, -18)); // Output: 6
console.log(foo(0, 10)); // Output: 10
console.log(foo(10, 0)); // Output: 10