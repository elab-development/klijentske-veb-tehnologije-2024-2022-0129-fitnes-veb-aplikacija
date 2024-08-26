import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from './Header';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

vi.mock('../contexts/UserContext', () => ({
  useUser: vi.fn(),
}));

vi.mock('react-router-dom', () => ({
    useNavigate: vi.fn(),
    Link: ({ children }: { children: ReactNode }) => <>{children}</>, // Mock the Link component
  }));

describe('Header Component', () => {
    it('renders profile and logout options when user is logged in', () => {
        (useUser as any).mockReturnValue({
          user: { username: 'testuser' },
          logout: vi.fn(),
        });
    
        const { getByText, getByAltText } = render(<Header />);
    
        expect(getByAltText('Profile')).toBeInTheDocument();
        expect(getByText('Profile')).toBeInTheDocument();
        expect(getByText('Log out')).toBeInTheDocument();
    });
    
    it('renders "Become a member" button when user is not logged in', () => {
        (useUser as any).mockReturnValue({
          user: null,
          logout: vi.fn(),
        });
    
        const { getByRole } = render(<Header />);
    
        expect(getByRole('button', { name: 'MENU' })).toBeInTheDocument();
    });

    it('navigates to profile page when profile button is clicked', () => {
        const mockNavigate = vi.fn();
        (useNavigate as any).mockReturnValue(mockNavigate);
        (useUser as any).mockReturnValue({
            user: { username: 'testuser' },
            logout: vi.fn(),
        });

        const { getByText } = render(<Header />);
        fireEvent.click(getByText('Profile'));

        expect(mockNavigate).toHaveBeenCalledWith('/profile');
    });

    it('logs out the user and navigates to home page on logout', () => {
        const mockNavigate = vi.fn();
        const mockLogout = vi.fn();
        (useNavigate as any).mockReturnValue(mockNavigate);
        (useUser as any).mockReturnValue({
            user: { username: 'testuser' },
            logout: mockLogout,
        });

        const { getByText } = render(<Header />);
        fireEvent.click(getByText('Log out'));

        expect(mockLogout).toHaveBeenCalled();
        expect(mockNavigate).toHaveBeenCalledWith('/');
    });
});
