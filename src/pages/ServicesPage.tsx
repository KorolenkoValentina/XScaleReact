import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/ServicesPage/servicepage.css'
import img1 from '../assets/images/ourservices/img-1.jpg';
import img2 from '../assets/images/ourservices/img-2.jpg';
import img3 from '../assets/images/ourservices/img-3.jpg';
import img4 from '../assets/images/ourservices/img-4.jpg';
import img5 from '../assets/images/ourservices/img-5.jpg';


interface ServiceContentProps {
img: string;
title: string;
text: string;
buttonText: string;
onClick: (id: string) => void;
}

const ServiceContent: React.FC<ServiceContentProps> = ({ img, title, text, buttonText, onClick }) => {
  const id = title.replace(/\s+/g, '-').toLowerCase();

  return (
  <div className="content d-flex justify-content-between align-items-center">
    <div className="text-box">
      <div className="title">{title}</div>
      <p className="subtitle">{text}<span id={`${id}-dots`}></span></p>
      <p className="subtitle" id={`${id}-more`} style={{ display: 'none' }}>{text}</p>
      <div className="read-next">
        <button onClick={()=> onClick(id)} id={`${id}-btn`}>{buttonText}</button>
      </div>
    </div>
    <div className="img-box">
      <img src={img} alt={`img-${id}`} className="img-fluid" />
    </div>
  </div>
  );
};
const ServiceContentSecond: React.FC<ServiceContentProps> = ({ img, title, text, buttonText, onClick }) => {
  const id = title.replace(/\s+/g, '-').toLowerCase();

  return (
  <div className="content d-flex justify-content-between align-items-center">
    
    <div className="img-box">
      <img src={img} alt={`img-${id}`} className="img-fluid" />
    </div>
    <div className="text-box">
      <div className="title">{title}</div>
      <p className="subtitle">{text}<span id={`${id}-dots`}></span></p>
      <p className="subtitle" id={`${id}-more`} style={{ display: 'none' }}>{text}</p>
      <div className="read-next">
        <button onClick={()=> onClick(id)} id={`${id}-btn`}>{buttonText}</button>
      </div>
    </div>
  </div>
  );
};



const OurServicesPage: React.FC = () => {
  const readMore = (id: string) => {
  const dots = document.getElementById(`${id}-dots`);
  const moreText = document.getElementById(`${id}-more`);
  const btnText = document.getElementById(`${id}-btn`);

  if (dots && moreText && btnText) {
  if (dots.style.display === 'none') {
  dots.style.display = 'inline';
  btnText.textContent = 'Read more';
  moreText.style.display = 'none';
  } else {
  dots.style.display = 'none';
  btnText.textContent = 'Read less';
  moreText.style.display = 'inline';
  }
  }
  };

  return (
  <>
    <Header />
    <section className="our-service">
      <div className="container">
        <div className="our-services">
          <p className="main__subtitle">
            home page / <span>our services</span>
          </p>
          <div className="title">Our Services</div>
          <p className="subtitle">
            How can we help your business? Logistics is generally the detailed organization and implementation of a
            complex operation. In a general business sense, logistics is the management of the flow.
          </p>
          <div className="main-part">
            <ServiceContent img={img1} title="Logistics IT Platform"
              text="Digital freight forwarder moving sea, air and road cargo, enabling businesses to improve their logistics operations."
              buttonText="Read more" onClick={readMore} />
            <ServiceContentSecond img={img2} title="Airfreight services"
              text="Covering the global airfreight network, we strengthened our capabilities in the air freight forwarding markets to a globally competitive position."
              buttonText="Read more" onClick={readMore} />
            <ServiceContent img={img3} title="Trucking / Haulage"
              text="Recognising pain points in the trucking / haulage ecosystem, such as the lack of data sharing, and the prevalence of manual actions, XSCALE is continuously harmonizing and optimizing operations in the supply chain process."
              buttonText="Read more" onClick={readMore} />
            <ServiceContentSecond img={img4} title="Customs brokerage"
              text="Clear your goods swiftly and easily with XSCALE’s exclusive network of customs broker partners."
              buttonText="Read more" onClick={readMore} />
            <ServiceContent img={img5} title="Cargo insurance"
              text="Every mode of transport has its own national and international set of laws and regulations. We can provide cargo insurance through a reputable insurance company, ensuring you coverage for full invoice value in case of loss or damage."
              buttonText="Read more" onClick={readMore} />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
  );
  };

export default OurServicesPage;