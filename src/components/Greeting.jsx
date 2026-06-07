// src/components/Greeting.jsx
function Greeting({ name }) {
  const displayName = name || 'مهمان';
  return <h1>سلام، {displayName}!</h1>;
}

export default Greeting;

