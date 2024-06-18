import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/HomePage/homepage.css'
import ImageFirst from '../assets/images/mainpage/img-first.jpg';
import ImageSecond from '../assets/images/mainpage/img-second.jpg';
import ImageThird from '../assets/images/mainpage/img-third.jpg';


function HomePage() {
return (
<>
  <section className="baner">
  <Header linkColor="white-color" />
    <div className="container">
      <div className="baner-content">
        <div className="title">Innovative platform for the logistics industry</div>
        <p className="subtitle">XSCALE provides a uniform and innovative platform for the logistics industry. We
          build
          technology to find smarter ways to connect shippers with carriers while solving some of the toughest
          problems in the freight industry</p>
      </div>
    </div>
  </section>
  <section className="main-page">
    <div className="container">
      <div className="main-part">
        <div className="content d-flex justify-content-between align-items-center">
          <div className="text-box">
            <div className="title">Custom tailored solutions </div>
            <p className="subtitle">With the platform businesses can optimize shipping routes, manage their
              warehouses more efficiently and make real-time decisions that weren't possible before.</p>
          </div>
          <div className="img-box">
            <img src={ImageFirst} className="img-fluid" alt="img-first" />
          </div>
        </div>
        <div className="content-secondary d-flex justify-content-between align-items-center">
          <div className="img-box">
            <img src={ImageSecond} alt="img-second" className="img-fluid" />
          </div>
          <div className="text-box">
            <div className="title">Forwarding optimization </div>
            <p className="subtitle">Digitized platform to manage freight forwarding process by tracking items by SKU
              data, matching shipments with real-time insights into sales and demand, and balancing different
              kinds of freight options to provide the right items at the right time.</p>
          </div>
        </div>
        <div className="content d-flex justify-content-between align-items-center">
          <div className="text-box">
            <div className="title">Transparency & integration </div>
            <p className="subtitle">Through a comprehensive, real-time overview of the status of each shipment,
              businesses understand where all their inventory is, where it needs to go, and what needs to
              happen to get it there. Since the platform connects directly with global transportation markets
              and manufacturers, customers can see a full digital picture of the freight environment, helping
              them make improvements and transport cargo more efficiently.</p>
          </div>
          <div className="img-box">
            <img src={ImageThird} alt="img-third" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container">
      <div className="secondary-part">
        <div className="secondary-part__content">
          <div className="title">Ready To Get Started? </div>
          <p className="subtitle">Start using the XScale platform. Sign up and send your first a request.</p>
        </div>
        <button className="btn">Go to the app</button>
      </div>
    </div>
  </section>
  <Footer />
</>
);
}

export default HomePage;