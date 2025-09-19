function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number) {
  return a * b;
}

/**
 * Finds the square root of the number passed. And number should be positive
 * @param num
 * @returns
 */
function sqrt(num: number): number {
  return Math.sqrt(num);
}

/**
 * Divides a by b and returns the quotient
 * @param a the divident
 * @param b the divisor, must be non zero
 * @returns quotient. Throws an exception if b is zero
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('divisor can not be zero!');
  }
  return a / b;
}
