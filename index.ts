function countSetsOfThree(numbers: number[], threshold: number): number {
  const sets: Array<{
    values: [number, number, number];
    sum: number;
  }> = [];
  for (let i = 0; i < numbers.length - 2; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        const values: [number, number, number] = [
          numbers[i],
          numbers[j],
          numbers[k],
        ];
        const sum = values.reduce((a, b) => a + b, 0);
        sets.push({
          values,
          sum,
        });
      }
    }
  }

  return sets.filter((set) => set.sum <= threshold).length;
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
  const color = expected === actual ? 'green' : 'red';
  item.style.color = color;
  item.textContent = `${description}. Expected: ${expected}. Actual: ${actual}.`;
  document.querySelector('#results').append(item);
}
