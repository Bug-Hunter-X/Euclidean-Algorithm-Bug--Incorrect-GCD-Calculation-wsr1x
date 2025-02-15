# Euclidean Algorithm Bug

This repository demonstrates a common bug in the implementation of the Euclidean algorithm for finding the greatest common divisor (GCD) of two numbers. The bug manifests when dealing with negative numbers or zero, leading to incorrect results or infinite recursion.

## Bug Description
The provided JavaScript code uses recursive calls to compute the GCD. However, it lacks proper handling of edge cases: negative inputs and zero. This leads to unexpected behavior and incorrect results.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js`.
3. Run the code. Observe the incorrect outputs for certain input pairs, especially those involving negative numbers or zero.

## Solution
The `bugSolution.js` file presents a corrected implementation that addresses the bug by adding robust checks and handling for negative inputs and zero. Refer to the `bugSolution.js` for the updated code.

## Learning Points
* Edge case handling is crucial when implementing algorithms.
* Always test thoroughly with various inputs, including edge cases.
* Consider using iterative solutions for better performance and error prevention in recursive algorithms.