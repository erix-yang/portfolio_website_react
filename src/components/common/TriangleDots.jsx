import React from 'react';

const TriangleDots = ({
  position = 'top-left',
  size = 20,
  dotSize = 6,
  color = 'white',
  opacity = 0.6,
  gap = 3
}) => {
  const positions = {
    'top-left': { top: 0, left: 0 },
    'top-right': { top: 0, right: 0 },
    'bottom-left': { bottom: 0, left: 0 },
    'bottom-right': { bottom: 0, right: 0 },
  };

  const pos = positions[position] || positions['top-left'];
  const gridSize = dotSize + gap;

  return (
    <div
      style={{
        position: 'absolute',
        ...pos,
        width: `${size * gridSize}px`,
        height: `${size * gridSize}px`,
        display: 'grid',
        gridTemplateColumns: `repeat(${size}, ${dotSize}px)`,
        gridTemplateRows: `repeat(${size}, ${dotSize}px)`,
        gap: `${gap}px`,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {[...Array(size * size)].map((_, index) => {
        const row = Math.floor(index / size);
        const col = index % size;

        let shouldRender = false;

        switch (position) {
          case 'top-left':
            shouldRender = row + col < size;
            break;
          case 'top-right':
            shouldRender = col >= row;
            break;
          case 'bottom-left':
            shouldRender = col <= row;
            break;
          case 'bottom-right':
            shouldRender = row + col >= size - 1;
            break;
          default:
            break;
        }

        return shouldRender ? (
          <div
            key={index}
            style={{
              width: dotSize,
              height: dotSize,
              borderRadius: '50%',
              backgroundColor: color,
              opacity: opacity,
            }}
          />
        ) : <div key={index} />;
      })}
    </div>
  );
};

export default TriangleDots;
