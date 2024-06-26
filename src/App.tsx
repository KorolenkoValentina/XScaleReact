import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import OurServicesPage from './pages/ServicesPage';
import ContactsPage from './pages/ContactsPages';
import SignUpPage from './pages/SignUpPages/SignUpPage';
import LoginPage from './pages/LoginPages';
import './App.css'

function App() {
return (

  <div>
    <main>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<OurServicesPage />} />
        <Route path="/contacts" element={<ContactsPage
        phoneSales="+442081339922"
        phoneOperations="+442081339933"
        phoneHotline="+447983065931"
        email="ship@xscale.uk"
        addressLondon="Suite 5, 10 Churchill Square, West Malling Kent ME19 4YU"
        addressSingapore="20 Collyer Quay, #09-01, Singapore 049319"
        addressTashkent="5A Shahrisabz-Tor Street, Tashkent 100060 Uzbekistan"/>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>

    </main>
  </div>

);
};

export default App;