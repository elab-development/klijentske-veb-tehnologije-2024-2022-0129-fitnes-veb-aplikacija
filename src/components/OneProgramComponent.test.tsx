import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import OneProgram from './OneProgram';
import { Program } from '../models/program';
import { FaBasketballBall } from "react-icons/fa";

describe('OneProgram Component', () => {
  it('renders the program details correctly', () => {
    // Arrange: Create a mock program object
    const program: Program = {
      name: 'Basketball Training',
      description: 'Improve your basketball skills with our program.',
      link: '/basketball-training',
      image: <FaBasketballBall data-testid="basketball-icon"/>
    };

    // Act: Render the component with the mock program
    render(
      <Router>
        <OneProgram program={program} />
      </Router>
    );

    // Assert: Check if the program details are rendered correctly
    expect(screen.getByText('Basketball Training')).toBeInTheDocument();
    expect(screen.getByText('Improve your basketball skills with our program.')).toBeInTheDocument();
    expect(screen.getByText('Discover More')).toBeInTheDocument();
    expect(screen.getByTestId('basketball-icon')).toBeInTheDocument();
  });
});
