function factorial(n) {
  // Caso base
  if (n === 0) {
    return 1;
  }

  // Caso recursivo
  return n * factorial(n - 1);
  // return 5 * factorial(4);
  // 5 * (4 * factorial(3))
  // 5 * (4 * (3 * factorial(2)))
  // 5 * (4 * (3 * (2 * factorial(1))))
  // 5 * (4 * (3 * (2 * (1 * factorial(0)))))
  // 5 * (4 * (3 * (2 * (1 * (1)))))
}

console.log(factorial(5)); // 120

// 3!
// = 3 x 2 x 1 x 1
// = 6

// 5!
// = 5 x 4 x 3 x 2 x 1 x 1
// = 120

// 5! = 5 x 4! = 5 x 4 x 3! = 5 x 4 x 3 x 2! = 5 x 4 x 3 x 2 x 1! = 5 x 4 x 3 x 2 x 1 x 0! = 5 x 4 x 3 x 2 x 1 x 1
