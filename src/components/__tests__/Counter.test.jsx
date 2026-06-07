// src/components/__tests__/Counter.test.jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../Counter';

describe('Counter', () => {
  it('increments count on button click', async () => {
    render(<Counter />);

    const countElement = screen.getByTestId('count-value');
    const button = screen.getByRole('button', { name: /افزایش/ });

    expect(countElement).toHaveTextContent('شمارنده: 0');
    await userEvent.click(button);
    expect(countElement).toHaveTextContent('شمارنده: 1');
    await userEvent.click(button);
    expect(countElement).toHaveTextContent('شمارنده: 2');
  });
});
