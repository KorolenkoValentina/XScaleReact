import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter} from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import LoginPage from '../pages/LoginPages';


jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  GoogleAuthProvider: jest.fn(),
  signInWithPopup: jest.fn(),
}));


const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

const renderPage = () =>
  render(
    <Provider store={store}>
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    </Provider>
);


  describe('LoginPage', () => {
    beforeEach(() => {
      jest.clearAllMocks();

      (signInWithEmailAndPassword as jest.Mock).mockResolvedValue({
          user: {
              email: 'test@example.com',
              uid: '12345',
              refreshToken: 'token123',
          },
      });

      (signInWithPopup as jest.Mock).mockResolvedValue({
          user: {
              email: 'test@example.com',
              uid: '12345',
              refreshToken: 'token123',
          },
      });
    });

  test('renders without crashing', () => {
    renderPage ()
      
  });
  test('renders Header with correct props', () => {
    renderPage ()
    expect(screen.getByText("Don’t have an account?")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  test('renders email and password inputs', () => {
    renderPage ()
    expect(screen.getByLabelText('Email*')).toBeInTheDocument();
    expect(screen.getByLabelText('Password*')).toBeInTheDocument();
    expect(screen.getByText(/Forgot password/i)).toBeInTheDocument();
  });

  test('handles email and password input changes', () => {
    renderPage ()
    const emailInput = screen.getByLabelText('Email*') as HTMLInputElement;
    const passwordInput = screen.getByLabelText('Password*') as HTMLInputElement;
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    
    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
  });

  test('shows error messages for invalid email and password', () => {
    renderPage ()
  
    fireEvent.click(screen.getByTestId('login-button'));
    
    // Check for error messages
    expect(screen.getByTestId('email-error')).toHaveTextContent('Please enter a valid email address.');
    expect(screen.getByTestId('password-error')).toHaveTextContent('Password must be at least 6 characters long.');

    // Fill in invalid email and short password
    fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'invalid-email' } });
    fireEvent.change(screen.getByTestId('password-input'), { target: { value: '123' } });
    
    // Try to submit again
    fireEvent.click(screen.getByTestId('login-button'));
    
    // Check for updated error messages
    expect(screen.getByTestId('email-error')).toHaveTextContent('Please enter a valid email address.');
    expect(screen.getByTestId('password-error')).toHaveTextContent('Password must be at least 6 characters long.');
  });

  test('triggers login with valid credentials', async () => {
    renderPage();
    const emailInput = screen.getByLabelText('Email*') as HTMLInputElement;
    const passwordInput = screen.getByLabelText('Password*') as HTMLInputElement;
    const loginButton = screen.getByTestId('login-button');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(loginButton);

    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(getAuth(), 'test@example.com', 'password123');
  });

  test('triggers Google login', async () => {
    renderPage();
    const googleLoginButton = screen.getByTestId('google-login-button');

    fireEvent.click(googleLoginButton);

    expect(signInWithPopup).toHaveBeenCalledWith(getAuth(), expect.any(GoogleAuthProvider));
  });

  test('Log in button should be present and clickable', () => {
    renderPage();
    const emailInput = screen.getByLabelText('Email*') as HTMLInputElement;
    const passwordInput = screen.getByLabelText('Password*') as HTMLInputElement;
    const loginButton = screen.getByTestId('login-button');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(loginButton).toBeInTheDocument();
    fireEvent.click(loginButton);

    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(getAuth(), 'test@example.com', 'password123');
  });
  
  test('Log in with Google button should be present and clickable', async () => {
    renderPage();
    const googleLoginButton = screen.getByTestId('google-login-button');

    expect(googleLoginButton).toBeInTheDocument();
    fireEvent.click(googleLoginButton);

    expect(signInWithPopup).toHaveBeenCalledWith(getAuth(), expect.any(GoogleAuthProvider));
  });
   
})

