import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../LoginForm';

describe('LoginForm', () => {
  it('updates the displayed username as user types', async () => {
    render(<LoginForm />);

    const input = screen.getByTestId('username-input');
    await userEvent.type(input, 'Ali');

    expect(screen.getByText(/نام کاربری وارد شده: Ali/)).toBeInTheDocument();
  });
});
