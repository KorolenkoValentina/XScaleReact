import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import SignUpPage from '../pages/SignUpPages/SignUpPage';



jest.mock('firebase/auth', () => ({
    getAuth: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
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
                <SignUpPage />
            </MemoryRouter>
        </Provider>
);
describe('SignUpPage', () => {
    beforeEach(() => {
        jest.clearAllMocks();

        (createUserWithEmailAndPassword as jest.Mock).mockResolvedValue({
            user: {
                email: 'test@example.com',
                uid: '12345',
                refreshToken: 'token123',
            },
        });
    });

    test('renders Step1 initially', () => {
        renderPage();
        expect(screen.getByText(/Step 1/i)).toBeInTheDocument()
    });

    test('navigates to Step2 on clicking Continue in Step1', () => {
        renderPage();
        fireEvent.click(screen.getByText(/Continue/i)); 
        expect(screen.getByText (/Step 2/i)).toBeInTheDocument(); 
    });

    test('navigates back to Step1 on clicking Back in Step2', () => {
        renderPage();
        fireEvent.click(screen.getByText(/Continue/i));
        fireEvent.click(screen.getByText(/Back/i)); 
        expect(screen.getByText(/Step 1/i)).toBeInTheDocument(); 
    })

    test('navigates to Step3 on clicking Continue in Step2', () => {
        renderPage();
        fireEvent.click(screen.getByText(/Continue/i)); 
        fireEvent.click(screen.getByText(/Continue/i)); 
        expect(screen.getByText(/Step 3/i)).toBeInTheDocument();
    });

    test('submits form with valid data', () => {
        renderPage();
        fireEvent.click(screen.getByText(/Continue/i)); 
        fireEvent.click(screen.getByText(/Continue/i)); 

        const companyNameInput = screen.getByLabelText(/Name of the company*/i) as HTMLInputElement;
        const jurisdictionInput = screen.getByLabelText(/Company jurisdiction*/i) as HTMLInputElement;
       

        fireEvent.change(companyNameInput, { target: { value: 'Test Company' } });
        fireEvent.change(jurisdictionInput, { target: { value: 'Test Jurisdiction' } });
        

        fireEvent.click(screen.getByText(/Create Account/i));

        expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(getAuth(), expect.any(String), expect.any(String));
    });

    test('handles input changes correctly', () => {
        renderPage();
        const firstNameInput = screen.getByLabelText(/First Name*/i) as HTMLInputElement;

        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        expect(firstNameInput.value).toBe('John');
    });
})