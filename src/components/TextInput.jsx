// src/components/TextInput.jsx
function TextInput({ id, label, value, onChange, type = 'text', placeholder }) {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        data-testid={`${id}-input`}
      />
    </div>
  );
}

export default TextInput;
