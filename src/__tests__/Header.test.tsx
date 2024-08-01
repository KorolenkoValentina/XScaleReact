import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import logo from '../assets/images/about/Logo.svg';
import logoLight from '../assets/images/mainpage/Logo.svg';

const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={ui} />
      </Routes>
    </BrowserRouter>
  );
};

describe('Header', () => {
  test('renders light logo on home page', () => {
    renderWithRouter(<Header />, { route: '/' });

    const logoImage = screen.getByAltText('logo') as HTMLImageElement;
    expect(logoImage.src).toContain(logoLight);
  });

  test('renders default logo on other pages', () => {
    renderWithRouter(<Header />, { route: '/about' });

    const logoImage = screen.getByAltText('logo') as HTMLImageElement;
    expect(logoImage.src).toContain(logo);
  });

  test('renders navigation links', () => {
    renderWithRouter(<Header />, { route: '/' });

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact us/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to the app/i)).toBeInTheDocument();
  });
});
