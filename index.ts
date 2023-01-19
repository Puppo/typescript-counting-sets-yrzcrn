function countSetsOfThree(numbers: number[], threshold: number): number {
  const sets: Array<{
    values: [number, number, number];
    sum: number;
  }> = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; i++) {
      for (let z = 0; z < numbers.length - 2; i++) {
        sets.push({
          values: [i, j, z],
          sum: i + j + z,
        });
      }
    }
  }

  return sets.filter((set) => set.sum > threshold).length;
}

append(`countSetsOfThree([1,2,3,4], 7)`, countSetsOfThree([1, 2, 3, 4], 7), 2);
append(`countSetsOfThree([4,1,3,2], 7)`, countSetsOfThree([4, 1, 3, 2], 7), 2);
append(`countSetsOfThree([1,2,3,9], 7)`, countSetsOfThree([1, 2, 3, 9], 7), 1);
append(`countSetsOfThree([2,2,2,2], 7)`, countSetsOfThree([2, 2, 2, 2], 7), 4);
append(`countSetsOfThree([3,3,3,3], 7)`, countSetsOfThree([3, 3, 3, 3], 7), 0);
append(
  `countSetsOfThree([1,2,3,4,5], 7)`,
  countSetsOfThree([1, 2, 3, 4, 5], 7),
  2
);

function append(description: string, actual: number, expected: number) {
  const item = document.createElement('div');
  item.textContent = `${description}. Expected: ${expected}. Actual: ${actual}.`;
  document.querySelector('#results').append(item);
}
