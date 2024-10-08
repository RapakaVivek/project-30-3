import React, { useState } from 'react';

const DynamicBackground = () => {
  const [bgColor, setBgColor] = useState('#ffffff'); 

  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F6', '#FF8C33'];

  const handleClick = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div 
      className="dynamic-background" 
      style={{ backgroundColor: bgColor }} 
      onClick={handleClick}
    >
      <h1>Click to Change Background Color</h1>
    </div>
  );
};

export default DynamicBackground;
