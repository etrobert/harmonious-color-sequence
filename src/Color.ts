interface Color {
  red: number;
  green: number;
  blue: number;
}

const square = (k: number) => k * k;

export const distance = (a: Color, b: Color) =>
  Math.sqrt(
    square(b.red - a.red) + square(b.green - a.green) + square(b.blue - a.blue)
  );

export const red: Color = { red: 255, green: 0, blue: 0 };
export const green: Color = { red: 0, green: 255, blue: 0 };
export const deepGreen: Color = { red: 0, green: 125, blue: 0 };
export const blue: Color = { red: 0, green: 0, blue: 255 };
export const cyan: Color = { red: 0, green: 255, blue: 255 };
export const yellow: Color = { red: 255, green: 255, blue: 0 };
export const white: Color = { red: 255, green: 255, blue: 255 };
export const pink: Color = { red: 255, green: 0, blue: 255 };
export const darkPurple: Color = { red: 125, green: 0, blue: 87 };
export const purple: Color = { red: 125, green: 14, blue: 255 };

export type { Color };
