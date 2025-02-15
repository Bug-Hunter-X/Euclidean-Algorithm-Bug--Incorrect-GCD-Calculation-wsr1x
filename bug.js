function foo(a, b) {
  if (a === b) {
    return true;
  }
  if (a > b) {
    return foo(a - b, b);
  }
  return foo(a, b - a);
}

console.log(foo(12, 18)); // Output: true
console.log(foo(15, 25)); // Output: true
console.log(foo(25, 15)); // Output: true
console.log(foo(20, 10)); // Output: true
console.log(foo(30, 40)); // Output: true