export function bubbleSort(numbers: Array<number>): Array<number> {
  const xs = [...numbers];
  const n = xs.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (xs[j] > xs[j + 1]) {
        const swap = xs[j + 1];
        xs[j + 1] = xs[j];
        xs[j] = swap;
      }
    }
  }
  return xs;
}

export function insertionSort(numbers: Array<number>): Array<number> {
  return numbers;
}

export function selectionSort(numbers: Array<number>): Array<number> {
  return numbers;
}
