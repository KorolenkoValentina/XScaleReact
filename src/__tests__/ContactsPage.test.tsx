import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactsPage from '../pages/ContactsPages';
import { MemoryRouter } from 'react-router-dom';




describe('ContactsPage', () => {

    const renderPage = () =>
        render(
            <MemoryRouter>
            <ContactsPage {...defaultProps} />
          </MemoryRouter>
    );
      
  const defaultProps = {
    phoneSales: '123-456-7890',
    phoneOperations: '098-765-4321',
    phoneHotline: '111-222-3333',
    email: 'contact@example.com',
    addressLondon: '123 London Street, London, UK',
    addressSingapore: '456 Singapore Street, Singapore',
    addressTashkent: '789 Tashkent Street, Tashkent, Uzbekistan',
  };

  test('renders without crashing', () => {
    renderPage()
  });
  test('renders Header and Footer', () => {
    renderPage()
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('displays the main title and subtitle', () => {
    renderPage()
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText((content, element) => {
      return element?.textContent === 'home page / contact us';
    })).toBeInTheDocument();
  
  });
  test('displays phone numbers correctly', () => {
    renderPage()
    expect(screen.getByText('Sales:')).toBeInTheDocument();
    expect(screen.getByText(defaultProps.phoneSales)).toBeInTheDocument();
    expect(screen.getByText('Operations:')).toBeInTheDocument();
    expect(screen.getByText(defaultProps.phoneOperations)).toBeInTheDocument();
    expect(screen.getByText('24/7 hotline:')).toBeInTheDocument();
    expect(screen.getByText(defaultProps.phoneHotline)).toBeInTheDocument();
  });
  test('displays email correctly', () => {
    renderPage()
    expect(screen.getByText(defaultProps.email)).toBeInTheDocument();
  });
  test('displays addresses correctly', () => {
    renderPage()
    
    const addressLondon = screen.getByText((content, element) => {
        return element?.textContent === `London / UK, ${defaultProps.addressLondon}`;
      });
      expect(addressLondon).toBeInTheDocument();
  
      const addressSingapore = screen.getByText((content, element) => {
        return element?.textContent === `Singapore, ${defaultProps.addressSingapore}`;
      });
      expect(addressSingapore).toBeInTheDocument();
  
      const addressTashkent = screen.getByText((content, element) => {
        return element?.textContent === `Tashkent, ${defaultProps.addressTashkent}`;
      });
      expect(addressTashkent).toBeInTheDocument();
    });
  

    test('renders images with correct alt texts in Header and Footer', () => {
    renderPage()

    const images = screen.getAllByRole('img') as HTMLImageElement[];
    const logoImages = images.filter(img => img.alt.includes('logo'));

    expect(logoImages).toHaveLength(2); 

  
    expect(logoImages[0].alt).toBe('logo');
    expect(logoImages[1].alt).toBe('Footer logo');
    });



})