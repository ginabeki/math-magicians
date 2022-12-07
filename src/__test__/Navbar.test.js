import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar/Navbar';

describe('Navbar component', () => {
  it('should render Navbar component correctly', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    const element = screen.getByRole('list');
    expect(element).toBeInTheDocument();
  });
});
