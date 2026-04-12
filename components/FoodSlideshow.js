import React, { useState, useEffect } from 'react';

const images = [
  '/images/Meal 1 PNG.png',
  '/images/Meal 2 PNG.png',
  '/images/Meal 3 PNG.png',
];

export default function FoodSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      width: 220,
      height: 220,
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255,255,255,0.85)',
      boxShadow: 'none',
      margin: '32px 32px 0 32px', // Slide down with top margin
      position: 'relative',
      zIndex: 3,
    }}>
      <img
        src={images[index]}
        alt="Food Slideshow"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '50%',
          border: 'none',
          boxShadow: 'none',
          background: 'none',
        }}
      />
    </div>
  );
}
