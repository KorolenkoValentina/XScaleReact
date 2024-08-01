import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import photo from '../assets/images/about/foto.jpg'
import '../assets/styles/AboutUsPage/aboutuspage.css'

function AboutUsPage() {
return (
<>
    <Header linkColor="default-color"/>
    <section className="about-us">
        <div className="container">
            <p className="main__subtitle">
                home page / <span>about company</span>
            </p>
            <div className="title">About company</div>
            <div className="about-us__item">
                <img src={photo} alt="foto" className="img-fluid" />
                <div className="about-us-text">
                    <p className="subtitle">
                        The technology-driven XSCALE platform provides businesses with end-to-end transparency and
                        control over their entire supply chain. Increasing efficiency, minimizing errors and optimizing
                        global trade.
                    </p>
                    <p className="subtitle">
                        By digitalising our operations, XSCALE overhauls traditionally legacy-based systems for freight
                        forwarding business, meaning they can offer better and more profitable services to clients,
                        faster.
                    </p>
                </div>
            </div>
            <div className="examples">
                <div className="example" data-testid="example">
                    <p className="subtitle">
                        At XSCALE we aim to achieve an efficient synergy of a broad scope of international freight
                        providers and carriers to ensure our clients receive the fastest possible transit times, at
                        competitive rates.
                    </p>
                </div>
                <div className="example example-transportation" data-testid="example">
                    <p className="subtitle">
                        Powered by innovative solutions, we offer a full suite of logistics services including, road,
                        sea and air freight, plus warehousing, pack / unpack, break bulk and more. We’re truly an end to
                        end logistics provider, dedicated to ensuring your supply chain runs as efficiently and cost
                        effectively as possible.
                    </p>
                </div>
                <div className="example example-service" data-testid="example">
                    <p className="subtitle">
                        We put a great emphasis on service through instant quotations, minimum cut-off/connection times,
                        all-time operations control and visibility in the first/last miles of your shipment.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="container">
            <div className="secondary-part">
                <div className="secondary-part__content">
                    <div className="title">Ready To Get Started?</div>
                    <p className="subtitle">
                        Start using the XScale platform. Sign up and send your first a request.
                    </p>
                </div>
                <button className="btn">Go to the app</button>
            </div>
        </div>
    </section>
    <Footer />

</>


)}

export default AboutUsPage;