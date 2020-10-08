import '@testing-library/jest-dom/extend-expect';

import {render, screen} from '@testing-library/react';
import React from 'react';

import Logo from './Logo';

describe('Logo component', () => {
  it('shows the logo text', () => {
    const {getByText} = render(<Logo />)
    expect(getByText(/netflix/i)).toBeInTheDocument();
    expect(getByText(/roulette/i)).toBeInTheDocument();
  });
});