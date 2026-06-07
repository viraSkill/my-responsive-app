// src/components/Counter.jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p data-testid="count-value">شمارنده: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>افزایش</button>
    </div>
  );
}

export default Counter;
