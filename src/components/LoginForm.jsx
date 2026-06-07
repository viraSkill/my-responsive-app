// src/components/LoginForm.jsx
import { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');

  return (
    <div>
      <label htmlFor="username">نام کاربری:</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="نام کاربری خود را وارد کنید"
        data-testid="username-input"
      />
      <p>نام کاربری وارد شده: {username}</p>
    </div>
  );
}

export default LoginForm;
