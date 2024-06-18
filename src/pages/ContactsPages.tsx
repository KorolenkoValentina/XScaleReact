import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/ContactsPage/contactspage.css'


interface ContactUsProps {
    phoneSales: string;
    phoneOperations: string;
    phoneHotline: string;
    email: string;
    addressLondon: string;
    addressSingapore: string;
    addressTashkent: string;
  }

const ContactsPage: React.FC<ContactUsProps> = ({ phoneSales, phoneOperations, phoneHotline, email, addressLondon, addressSingapore, addressTashkent }) => {
  return (
    <>
    <Header/>
    <section className="contact-us">
      <div className="container">
        <p className="main__subtitle">home page / <span>contact us</span></p>
        <div className="title">Contact Us</div>
        <div className="contacts">
          <div className="first-part">
            <div className="contact contact-mobile">
              <h5>Phone</h5>
              <p className="subtitle">Sales: <span>{phoneSales}</span></p>
              <p className="subtitle">Operations: <span>{phoneOperations}</span></p>
              <p className="subtitle">24/7 hotline: <span>{phoneHotline}</span></p>
            </div>
            <div className="contact contact-email">
              <h5>Email</h5>
              <p className="subtitle">{email}</p>
            </div>
          </div>
          <div className="second-part">
            <div className="contact contact-addr">
              <h5>Address</h5>
              <p className="subtitle"><span>London / UK</span>, {addressLondon}</p>
              <p className="subtitle"><span>Singapore</span>, {addressSingapore}</p>
              <p className="subtitle"><span>Tashkent</span>, {addressTashkent}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ContactsPage;