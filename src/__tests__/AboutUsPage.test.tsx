import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutUsPage from '../pages/AboutUsPage';


const renderPage = () =>
  render(
    <MemoryRouter>
      <AboutUsPage/>
    </MemoryRouter>
);

describe('AboutUsPage', () => {
  test('renders AboutUsPage without crashing', () => {
    renderPage();
  });
  test('renders Header component', () => {
    renderPage();
    const headerElement = screen.getByRole('banner'); 
    expect(headerElement).toBeInTheDocument();
  });

  test('renders Footer component', () => {
    renderPage();
    const footerElement = screen.getByRole('contentinfo'); 
    expect(footerElement).toBeInTheDocument();
  });

  test('displays correct text content', () => {
    renderPage();
    const textElements = [
      /The technology-driven XSCALE platform/i,
      /By digitalising our operations/i,
      /At XSCALE we aim to achieve/i,
      /Powered by innovative solutions/i,
      /We put a great emphasis on service/i
    ];
    textElements.forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  test('renders image with correct src and alt', () => {
    renderPage();
    const imageElement = screen.getByAltText('foto');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', expect.stringContaining('foto.jpg'));
  });
  test('button has correct text', () => {
    renderPage();
    const buttons = screen.getAllByRole('button', { name: /Go to the app/i });
    const targetButton = buttons.find(button => button.textContent === 'Go to the app');
    expect(targetButton).toBeInTheDocument();
  });
  test('renders all sections', () => {
    renderPage();
    const aboutUsSection = screen.getByText(/About company/i, { selector: '.title' });
    const secondaryPartSection = screen.getByText(/Ready To Get Started\?/i, { selector: '.secondary-part .title' });
    expect(aboutUsSection).toBeInTheDocument();
    expect(secondaryPartSection).toBeInTheDocument();
  });
test('correct number of example elements', () => {
  renderPage();
    const exampleElements = screen.getAllByTestId('example');
    expect(exampleElements.length).toBe(3);
  });
  test('all links are correct', () => {
    renderPage();
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('href');
    });
  });
  
});


  


