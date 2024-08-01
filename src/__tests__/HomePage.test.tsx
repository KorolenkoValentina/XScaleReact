import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/user-auth';
import { useAppDispatch } from '../hooks/redux-hooks';
import { removeUser} from '../store/slices/userSlice';
import HomePage from '../pages/HomePage';


jest.mock('../hooks/user-auth', () => ({
  useAuth: jest.fn(),
}));

jest.mock('../hooks/redux-hooks', () => ({
  useAppDispatch: jest.fn(),
}));

const mockDispatch = jest.fn();
const renderPage = () =>
  render(
    <MemoryRouter>
      <HomePage/>
    </MemoryRouter>
);

describe('HomePage', () => {
  beforeEach(() => {
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });

  test('renders HomePage without crashing when user is authenticated', () => {
    (useAuth as jest.Mock).mockReturnValue({ isAuth: true, email: 'test@example.com' });
    renderPage();
  });
  

  test('renders images with correct alt texts', () => {
    (useAuth as jest.Mock).mockReturnValue({ isAuth: true, email: 'test@example.com' });
   renderPage();

   const mainImages = screen.getAllByRole('img', { name: /img-/i });
    
    expect(mainImages).toHaveLength(3); 
    expect(mainImages[0]).toHaveAttribute('alt', 'img-first');
    expect(mainImages[1]).toHaveAttribute('alt', 'img-second');
    expect(mainImages[2]).toHaveAttribute('alt', 'img-third');
  });
  test('renders logo images in Header and Footer with correct alt texts', () => {
    (useAuth as jest.Mock).mockReturnValue({ isAuth: true, email: 'test@example.com' });
    renderPage();
    const images = screen.getAllByRole('img') as HTMLImageElement[];
    const logoImages = images.filter(img => img.alt.includes('logo'));

    expect(logoImages).toHaveLength(2); 

  
    expect(logoImages[0].alt).toBe('logo');
    expect(logoImages[1].alt).toBe('Footer logo');
  });

  test('renders logout button with correct text and calls dispatch on click', () => {
    (useAuth as jest.Mock).mockReturnValue({ isAuth: true, email: 'test@example.com' });
  renderPage();

  const logoutButton = screen.getByRole('button', { name: /Log out/i });
  expect(logoutButton).toBeInTheDocument();

  fireEvent.click(logoutButton);
  expect(mockDispatch).toHaveBeenCalledWith(removeUser());
  });

  test('redirects to login page when user is not authenticated', () => {
  (useAuth as jest.Mock).mockReturnValue({ isAuth: false, email: '' });
  
  const TestWrapper = () => (
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    </MemoryRouter>
  );

  const { container } = render(<TestWrapper />);
  
  expect(screen.getByText('Login Page')).toBeInTheDocument();
  });
});
