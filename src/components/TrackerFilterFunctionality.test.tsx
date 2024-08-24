import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tracker from './Tracker';
import { UserContext } from '../contexts/UserContext';
import { Exercise } from '../models/exercise';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const mockExercises: Exercise[] = [
  new Exercise('Push-Up', 'image1.png', 'Chest'),
  new Exercise('Squat', 'image2.png', 'Legs'),
  new Exercise('Plank', 'image3.png', 'Abs'),
  new Exercise('Jumping-Jacks', 'image4.png', 'Cardio'),
  new Exercise('Lunges', 'image5.png', 'Legs'),
  new Exercise('Sit-Up', 'image6.png', 'Abs')
];

vi.mock('axios');
const mockedAxios = vi.mocked(axios, true);

const mockUser = {
    id: 1,
    username: 'testUser',
    password: 'testPassword',
    fullName: 'Test User',
    email: 'test@email'
};

beforeEach(() => {
    mockedAxios.get.mockResolvedValue({ data: { exercises: mockExercises } });
  });
  
describe('Tracker Component', () => {
  it('should filter exercises by category', async () => {
    render(
      <UserContext.Provider value={{ user: mockUser, setUser: vi.fn(), logout: vi.fn() }}>
        <Router>
          <Tracker />
        </Router>
      </UserContext.Provider>
    );

    await screen.findByText('Sit-Up');

    expect(screen.getByText('Push-Up')).toBeInTheDocument();
    expect(screen.getByText('Squat')).toBeInTheDocument();
    expect(screen.getByText('Plank')).toBeInTheDocument();
    expect(screen.getByText('Jumping-Jacks')).toBeInTheDocument();
    expect(screen.getByText('Lunges')).toBeInTheDocument();
    expect(screen.getByText('Sit-Up')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Legs'));

    expect(screen.queryByText('Push-Up')).not.toBeInTheDocument();
    expect(screen.getByText('Squat')).toBeInTheDocument();
    expect(screen.queryByText('Plank')).not.toBeInTheDocument();
    expect(screen.queryByText('Jumping-Jacks')).not.toBeInTheDocument();
    expect(screen.getByText('Lunges')).toBeInTheDocument();
    expect(screen.queryByText('Sit-Up')).not.toBeInTheDocument();
  });

  it('should filter exercises by sport', async () => {
    render(
      <UserContext.Provider value={{ user: mockUser, setUser: vi.fn(), logout: vi.fn() }}>
        <Router>
          <Tracker />
        </Router>
      </UserContext.Provider>
    );

    await screen.findByText('Sit-Up');

    expect(screen.getByText('Push-Up')).toBeInTheDocument();
    expect(screen.getByText('Squat')).toBeInTheDocument();
    expect(screen.getByText('Plank')).toBeInTheDocument();
    expect(screen.getByText('Jumping-Jacks')).toBeInTheDocument();
    expect(screen.getByText('Lunges')).toBeInTheDocument();
    expect(screen.getByText('Sit-Up')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Cardio'));

    expect(screen.queryByText('Push-Up')).not.toBeInTheDocument();
    expect(screen.queryByText('Squat')).not.toBeInTheDocument();
    expect(screen.queryByText('Plank')).not.toBeInTheDocument();
    expect(screen.getByText('Jumping-Jacks')).toBeInTheDocument();
    expect(screen.queryByText('Lunges')).not.toBeInTheDocument();
    expect(screen.queryByText('Sit-Up')).not.toBeInTheDocument();
  });

  it('should filter exercises by search', async () => {
    render(
      <UserContext.Provider value={{ user: mockUser, setUser: vi.fn(), logout: vi.fn() }}>
        <Router>
          <Tracker />
        </Router>
      </UserContext.Provider>
    );

    await screen.findByText('Push-Up');
    
    expect(screen.getByText('Push-Up')).toBeInTheDocument();
    expect(screen.getByText('Squat')).toBeInTheDocument();
    expect(screen.getByText('Plank')).toBeInTheDocument();
    expect(screen.getByText('Jumping-Jacks')).toBeInTheDocument();
    expect(screen.getByText('Lunges')).toBeInTheDocument();
    expect(screen.getByText('Sit-Up')).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Search Exercises'), {
      target: { value: 'Push' }
    });

    expect(screen.getByText('Push-Up')).toBeInTheDocument();
    expect(screen.queryByText('Squat')).not.toBeInTheDocument();
    expect(screen.queryByText('Plank')).not.toBeInTheDocument();
    expect(screen.queryByText('Jumping-Jacks')).not.toBeInTheDocument();
    expect(screen.queryByText('Lunges')).not.toBeInTheDocument();
    expect(screen.queryByText('Sit-Up')).not.toBeInTheDocument();
  });
});