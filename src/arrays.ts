/**
 * Returns all the possible combinations of items from a *in no specific order*.
 * @example
 * // could return [[1, 2, 3],
 * //               [1, 3, 2],
 * //               [2, 1, 3],
 * //               [2, 3, 1],
 * //               [3, 1, 2],
 * //               [3, 2, 1]]
 * combinations([1, 2, 3])
 */
const combinations = <T>(array: T[]) => {
  /**
   * Recursively creates all combinations of the iteems of `array`,
   * or `[[]]` if `array` is empty
   */
  const combinationsR = <T>(array: T[]): T[][] => {
    if (array.length == 0) return [[]];
    const [first, ...rest] = array;
    return combinationsR(rest)
      .map((combination) => insertEverywhere(combination, first))
      .flat();
  };

  /**
   * Creates an array of arrays made from `array` with
   * `elem` inserted in every possible position
   */
  const insertEverywhere = <T>(array: T[], elem: T) => {
    const result = [];
    for (let i = 0; i <= array.length; ++i) {
      const newArray = [...array];
      newArray.splice(i, 0, elem);
      result.push(newArray);
    }
    return result;
  };

  return array.length == 0 ? [] : combinationsR(array);
};

/**
 * Returns the element from *a* that has the highest score
 * in terms of the function *f*
 * @param a The array to search in
 * @param f The score function that we are trying to maximise
 */
const findBest = <T>(array: T[], f: (t: T) => number) =>
  array[findBestIndex(array, f)];

/**
 * Returns the element from *a* that has the highest score
 * in terms of the function *f*
 * @param a The array to search in
 * @param f The score function that we are trying to maximise
 */
const findBestIndex = <T>(array: T[], f: (t: T) => number) => {
  if (array.length == 0) throw Error('Array is empty');
  let bestElementIndex = 0;
  let bestScore = f(array[0]);
  for (let i = 1; i < array.length; ++i) {
    const elem = array[i];
    const score = f(elem);
    if (score > bestScore) {
      bestScore = score;
      bestElementIndex = i;
    }
  }
  return bestElementIndex;
};

const remove = <T>(array: T[], elem: T) => {
  const index = array.indexOf(elem);
  if (index == -1) throw Error('Missing element');
  array.splice(index, 1);
};

export const last = <T>(array: T[]) => {
  if (array.length == 0) throw Error('Empty array');
  return array[array.length - 1];
};

export { combinations, findBest, findBestIndex, remove };
