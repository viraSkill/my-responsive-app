// src/components/SubmitButton.jsx
function SubmitButton({ onClick, disabled, children }) {
  return (
    <button onClick={onClick} disabled={disabled} data-testid="submit-button">
      {children}
    </button>
  );
}

export default SubmitButton;
