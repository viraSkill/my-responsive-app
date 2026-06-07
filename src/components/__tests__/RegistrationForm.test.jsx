
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegistrationForm from '../RegistrationForm';

describe('RegistrationForm Integration', () => {
  it('submits with valid data and shows success message', async () => {
    render(<RegistrationForm />);

    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const submitButton = screen.getByTestId('submit-button');

    expect(submitButton).toBeDisabled();

    await userEvent.type(nameInput, 'Amir');
    await userEvent.type(emailInput, 'amir@test.com');

    expect(submitButton).toBeEnabled();
    await userEvent.click(submitButton);

    expect(screen.getByTestId('success-message')).toBeInTheDocument();
    expect(screen.queryByTestId('name-input')).not.toBeInTheDocument();
  });

  it('keeps button disabled with invalid email', async () => {
    render(<RegistrationForm />);

    await userEvent.type(screen.getByTestId('name-input'), 'Amir');
    await userEvent.type(screen.getByTestId('email-input'), 'invalid-email');

    expect(screen.getByTestId('submit-button')).toBeDisabled();
  });
});
