// src/components/__tests__/Greeting.test.jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Greeting from '../Greeting';

describe('Greeting', () => {
  it('renders greeting with provided name', () => {
    render(<Greeting name="دنیا" />);
    expect(screen.getByText('سلام، دنیا!')).toBeInTheDocument();
  });

  it('renders default greeting when name is not provided', () => {
    render(<Greeting />);
    expect(screen.getByText('سلام، مهمان!')).toBeInTheDocument();
  });
});
