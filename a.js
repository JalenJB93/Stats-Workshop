/**
 * Parses a comma-separated string of numbers into an array of numbers.
 * @param {string} input - A comma-separated string of numbers (e.g., "1, 2, 3")
 * @returns {number[]} Array of parsed numbers.
 */
function parseNumbers(input) {
  return input
    .split(",")
    .map((num) => parseFloat(num.trim()))
    .filter((num) => !isNaN(num));
}

/**
 * Calculates statistics from an array of numbers.
 * @param {number[]} numbers - An array of numbers
 * @returns {{ count: number, sum: number, mean: number, min: number, max: number }}
 */
function calculateStatistics(numbers) {
  const count = numbers.length;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const mean = sum / count;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return { count, sum, mean, min, max };
}

/**
 * Prompts the user for input, calculates statistics, and alerts the result.
 */
function promptAndCalculate() {
  const input = prompt(
    "Enter a list of numbers separated by commas (e.g., 1, 2, 3):"
  );
  const numbers = parseNumbers(input);

  if (numbers.length === 0) {
    alert("Please enter at least one valid number.");
    return;
  }

  const stats = calculateStatistics(numbers);

  alert(
    `Statistics:
- Count: ${stats.count}
- Sum: ${stats.sum}
- Mean: ${stats.mean.toFixed(2)}
- Min: ${stats.min}
- Max: ${stats.max}`
  );
}
