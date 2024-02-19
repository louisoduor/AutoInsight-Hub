import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Navbar from './Navbar';

test('renders Navbar component', () => {
  render(<Navbar />);

  const logo = screen.getByAltText(/logo/i);
  expect(logo).toBeInTheDocument();

  const homeLink = screen.getByRole('link', { name: /home/i });
  const aboutLink = screen.getByRole('link', { name: /about/i });
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();

  const darkModeButton = screen.getByRole('button');
  expect(darkModeButton).toBeInTheDocument();
});


