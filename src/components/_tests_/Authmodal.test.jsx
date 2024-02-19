import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Authmodal from './Authmodal';

test('renders Authmodal component', () => {
  render(<Authmodal closeModal={() => {}} />);
  
  // Check if the modal content is present
  const modalContent = screen.getByText(/sign in/i);
  expect(modalContent).toBeInTheDocument();

  // Check if the "Close" button is present
  const closeButton = screen.getByText(/close/i);
  expect(closeButton).toBeInTheDocument();
});
