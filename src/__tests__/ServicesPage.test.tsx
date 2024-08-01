import { render, screen, fireEvent  } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ServicesPage from '../pages/ServicesPage';


const renderPage = () =>
  render(
    <MemoryRouter>
      <ServicesPage />
    </MemoryRouter>
  );

describe('ServicesPage', () => {
  test('renders OurServicesPage without crashing', () => {
    renderPage();
  });

  test('renders Header and Footer', () => {
    renderPage();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('displays the main title and subtitle', () => {
    renderPage();
    expect(screen.getByText('Our Services')).toBeInTheDocument();
  expect(screen.getByText(/How can we help your business?/)).toBeInTheDocument();
  });

  test('renders ServiceContent and ServiceContentSecond components with correct titles', () => {
    renderPage();
    expect(screen.getByText('Logistics IT Platform')).toBeInTheDocument();
    expect(screen.getByText('Airfreight services')).toBeInTheDocument();
    expect(screen.getByText('Trucking / Haulage')).toBeInTheDocument();
    expect(screen.getByText('Customs brokerage')).toBeInTheDocument();
    expect(screen.getByText('Cargo insurance')).toBeInTheDocument();
  });

  test('renders all images with correct alt texts', () => {
    renderPage();
    const images = screen.getAllByRole('img') as HTMLImageElement[];

    const serviceImages = images.filter(img =>
      img.alt.startsWith('img-') && !img.alt.includes('logo')
    );

    expect(serviceImages).toHaveLength(5);

    expect(serviceImages[0].alt).toBe('img-logistics-it-platform');
    expect(serviceImages[1].alt).toBe('img-airfreight-services');
    expect(serviceImages[2].alt).toBe('img-trucking-/-haulage');
    expect(serviceImages[3].alt).toBe('img-customs-brokerage');
    expect(serviceImages[4].alt).toBe('img-cargo-insurance');
  });
  test('renders logo images with correct alt texts', () => {
    renderPage();

    const images = screen.getAllByRole('img') as HTMLImageElement[];
    const logoImages = images.filter(img => img.alt.includes('logo'));

    expect(logoImages).toHaveLength(2); 

  
    expect(logoImages[0].alt).toBe('logo');
    expect(logoImages[1].alt).toBe('Footer logo');
  });

  test('toggles text visibility on button click', () => {
    renderPage();

    const buttons = screen.getAllByRole('button', { name: /Read more/i });
    buttons.forEach((button) => {
      fireEvent.click(button);
      expect(button).toHaveTextContent('Read less');
    });

    buttons.forEach((button) => {
      fireEvent.click(button);
      expect(button).toHaveTextContent('Read more');
    });
  });
  
  
  



})