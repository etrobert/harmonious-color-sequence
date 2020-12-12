import React from 'react';
import { Color, distance, darkPurple, deepGreen, red, white } from './Color';
import ColorSequence from './ColorSequence';

import colorGradient from './colorGradient';

import { findBest, combinations } from './arrays';

const totalDistance = (colors: Color[]) => {
  let total = 0;
  for (let i = 0; i < colors.length - 1; ++i) {
    total += distance(colors[i], colors[i + 1]);
  }
  return total;
};

const bruteForce = (colors: Color[]) =>
  findBest(combinations(colors), (colors) => -totalDistance(colors));

function App() {
  const colors = [red, white, darkPurple, deepGreen];
  const best = bruteForce(colors);
  return (
    <div className="App">
      <ColorSequence title="input" colors={colors} />
      {best && <ColorSequence title="bruteForce" colors={best} />}
      <ColorSequence title="magic" colors={colorGradient(colors)} />
    </div>
  );
}

export default App;
