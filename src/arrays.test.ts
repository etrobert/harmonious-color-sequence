import { combinations, findBest } from './arrays';

const identity = <T>(k: T) => k;

describe('findBest', () => {
  it('should find the biggest number', () => {
    const numbersArray = [1, 2, 7, 4, 5];
    expect(findBest(numbersArray, identity)).toBe(7);
  });
  // TODO it should throw when empty
});

describe('combinations', () => {
  it('should return an empty array given an empty array', () => {
    expect(combinations([])).toStrictEqual([]);
  });
  it('should work with single item array', () => {
    const array = [1];
    expect(combinations(array)).toStrictEqual([array]);
  });
  it('should work with two items array', () => {
    const array = [1, 2];
    const expectedOutput = [
      [1, 2],
      [2, 1],
    ];
    expect(combinations(array).sort()).toStrictEqual(expectedOutput.sort());
  });
  it('should work with three items array', () => {
    const array = [1, 2, 3];
    const expectedOutput = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ];
    console.log(combinations(array));
    expect(combinations(array).sort()).toStrictEqual(expectedOutput.sort());
  });
});
