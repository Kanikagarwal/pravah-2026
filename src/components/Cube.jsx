import React, { useRef, useState } from 'react';

const Cube = () => {
  const cubeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const toggleRotation = () => {
    if (cubeRef.current) {
      if (isPaused) {
        cubeRef.current.style.animationPlayState = 'running';
      } else {
        cubeRef.current.style.animationPlayState = 'paused';
      }
      setIsPaused(!isPaused);
    }
  };

  return (
    <div>
      <div className="canvas">
        <div className="cube-wrapper">
          <div className="cube" ref={cubeRef}>
            <div className="side front" />
            <div className="side back" />
            <div className="side left" />
            <div className="side right" />
            <div className="side top" />
            <div className="side bottom" />
          </div>
        </div>
        <button className="toggle-button relative z-50" onClick={toggleRotation}>
          {isPaused ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="play-icon"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pause-icon"
            >
              <rect x={6} y={4} width={4} height={16} />
              <rect x={14} y={4} width={4} height={16} />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Cube;
