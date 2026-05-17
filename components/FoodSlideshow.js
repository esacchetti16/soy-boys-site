import React, { useState, useEffect } from 'react';

const images = [
  '/images/Meal 1 PNG.png',
  '/images/Meal 2 PNG.png',
  '/images/Meal 3 PNG.png',
  '/images/Lemon Tahini Pasta.png',
];

const INTERVAL_MS = 4000;

export default function FoodSlideshow() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = (e) => setReduceMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, INTERVAL_MS);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <div
      className="food-slideshow"
      role="region"
      aria-label="Featured dishes"
      aria-live="polite"
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`food-slideshow__img${i === index ? ' food-slideshow__img--active' : ''}`}
        />
      ))}
    </div>
  );
}
