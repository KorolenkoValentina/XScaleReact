
import React from 'react';

import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};
// const renderPage = () =>
//   render(
//       <MemoryRouter>
//       <Footer />
//     </MemoryRouter>
// );

describe('Footer', () => {
  test('renders footer logo and subtitle', () => {
    renderWithRouter(<Footer />);

    // Check if logo is present
    const logoElement = screen.getByAltText('Footer logo');
    expect(logoElement).toBeInTheDocument();

    // Check if subtitle is present
    const subtitleElement = screen.getByText(/Innovative platform for the logistics industry/i);
    expect(subtitleElement).toBeInTheDocument();
  });

  test('renders footer navigation links', () => {
    renderWithRouter(<Footer />);

    // Check if navigation links are present
    const homeLink = screen.getByText(/Home/i);
    const aboutLink = screen.getByText(/About/i);
    const servicesLink = screen.getByText(/Services/i);
    const contactUsLink = screen.getByText(/Contact us/i);

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
    expect(contactUsLink).toBeInTheDocument();
  });

  test('renders footer social links', () => {
    renderWithRouter(<Footer />);

    // Check if social links are present
    const facebookLink = screen.getByLabelText(/Facebook/i);
    const linkedinLink = screen.getByLabelText(/LinkedIn/i);
    const twitterLink = screen.getByLabelText(/Twitter/i);

    expect(facebookLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
  });

  test('renders footer button', () => {
    renderWithRouter(<Footer />);

    // Check if the button is present
    const buttonElement = screen.getByText(/Go to the app/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders footer links to terms, privacy policy, and conditions', () => {
    renderWithRouter(<Footer />);

    // Check if the footer links are present
    const termsLink = screen.getByText(/© 2021 Xscale/i);
    const privacyPolicyLink = screen.getByText(/Privacy Policy/i);
    const conditionsLink = screen.getByText(/Terms of conditions/i);

    expect(termsLink).toBeInTheDocument();
    expect(privacyPolicyLink).toBeInTheDocument();
    expect(conditionsLink).toBeInTheDocument();
  });
});
