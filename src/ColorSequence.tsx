import React from 'react';

import { Color, distance } from './Color';

import './ColorSequence.css';

type Props = { title?: string; colors: Color[] };

const ColorSquare: React.FC<{ color: Color }> = ({ color }) => {
  const backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;
  return (
    <div className="ColorSquare" style={{ backgroundColor }}>
      {color.red}
      <br />
      {color.green}
      <br />
      {color.blue}
    </div>
  );
};

const ColorSequence: React.FC<Props> = ({ title, colors }) => {
  const getTotalDistance = (colors: Color[]) => {
    let total = 0;
    for (let i = 0; i < colors.length - 1; ++i) {
      total += distance(colors[i], colors[i + 1]);
    }
    return total;
  };
  return (
    <div className="ColorSequence">
      {title}
      <div className="ColorSequence__Colors">
        {colors.map((color, i) => (
          <ColorSquare key={i} color={color} />
        ))}
      </div>
      {getTotalDistance(colors)}
    </div>
  );
};

export default ColorSequence;
