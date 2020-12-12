import { findBestIndex, last } from './arrays';
import { Color, distance } from './Color';

const max = (a: number, b: number) => Math.max(a, b);

const mostIsolatedIndex = (colors: Color[]) =>
  findBestIndex(colors, (color) => {
    const maxDist = colors
      .map((otherColor) => distance(color, otherColor))
      .reduce(max);
    console.log(`maxDist for ${JSON.stringify(color)}: ${maxDist}`);
    return maxDist;
  });

const colorGradient = (colors: Color[]) => {
  if (colors.length == 0) return [];
  const startColor = mostIsolatedIndex(colors);
  let toBePlaced = [...colors];
  toBePlaced.splice(startColor, 1);
  let result = [colors[startColor]];
  while (toBePlaced.length > 0) {
    const newColorIndex = findBestIndex(
      toBePlaced,
      (color) => -distance(last(result), color)
    )!;
    result.push(toBePlaced[newColorIndex]);
    toBePlaced.splice(newColorIndex, 1);
  }
  return result;
};

export default colorGradient;
