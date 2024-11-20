// Counter.js

import React, { useState, useEffect } from 'react';

const Counter = () => {
  // Set initial count to 0 or the saved value in localStorage
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? parseInt(savedCount) : 0;
  });

  // Update localStorage whenever the count changes
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;

