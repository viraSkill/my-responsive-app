// src/components/RegistrationForm.jsx
import { useState } from 'react';
import TextInput from './components/TextInput';
import SubmitButton from './components/SubmitButton';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFormValid = name.trim() !== '' && email.includes('@');

  const handleSubmit = () => {
    if (isFormValid) {
      setIsSubmitted(true);
    }
  };

  return (
    <div>
      <h2>فرم ثبت نام</h2>
      {!isSubmitted ? (
        <>
          <TextInput
            id="name"
            label="نام"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="نام خود را وارد کنید"
          />
          <TextInput
            id="email"
            label="ایمیل"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ایمیل خود را وارد کنید"
          />
          <SubmitButton onClick={handleSubmit} disabled={!isFormValid}>
            ثبت نام
          </SubmitButton>
        </>
      ) : (
        <p data-testid="success-message">ثبت نام با موفقیت انجام شد!</p>
      )}
    </div>
  );
}

export default RegistrationForm;
