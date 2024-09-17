import React from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";
import Products from '@data/products';

import HeroSection from "@components/sections/Hero"
import AboutSection from "@components/sections/About";
import CategoriesSection from "@components/sections/Categories";
import TeamSection from "@components/sections/Team";
import CallToActionSection from "@components/sections/CallToAction";
import PromoVideoSection from "@components/sections/PromoVideo";
import ContactForm from "@components/forms/ContactForm";
import Link from "next/link";
const ProductsSlider = dynamic( () => import("@components/sliders/Products"), { ssr: false } );

export const metadata = {
  title: {
		default: "Home",
		template: "%s | " + AppData.settings.siteName,
	},
  description:"At Meltz we strive to mark your memories through our range of sweets."
}

async function Home1() {
  return (
    <>
      <HeroSection type={2} />
      <AboutSection />
      {/* <CategoriesSection /> */}
      <ProductsSlider itemType='product' items={Products.collection['popular']} slidesPerView={4} />
      <PromoVideoSection />
      <section className="sb-banner sb-banner-color">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        {/* main title */}
                        <div className="sb-main-title-frame">
                            <div className="sb-main-title">
                                <span className="sb-suptitle sb-mb-30">Contact</span>
                                <h1 className="sb-mb-30">Get in <span>Touch with Us</span></h1>
                                <p className="sb-text sb-text-lg sb-mb-30">For Order Enquiries<br/>or any other information or help.</p>

                               
                            </div>
                        </div>
                        {/* main title end */}
                    </div>
                    <div className="col-lg-5">
                        <div className="sb-contact-form-frame">
                            <div className="sb-illustration-9">
                                

                                <div className="sb-cirkle-1"></div>
                                <div className="sb-cirkle-2"></div>
                                <div className="sb-cirkle-3"></div>
                            </div>
                            <div className="sb-form-content">
                                <div className="sb-main-content">
                                    <h3 className="sb-mb-30">Send Message</h3>
                                    
                                    <ContactForm />
                                </div>
                                <div className="sb-success-result" id="contactFormStatus">
                                    <img src="/img/ui/success.jpg" alt="success" className="sb-mb-15" />
                                    <div className="sb-success-title sb-mb-15">Success!</div>
                                    <p className="sb-text sb-mb-15">Your message has been sent <br/>successfully</p>

                                    {/* button */}
                                    <Link href="/" className="sb-btn sb-btn-2">
                                        <span className="sb-icon">
                                            <img src="/img/ui/icons/arrow-2.svg" alt="icon" />
                                        </span>
                                        <span>Back to home</span>
                                    </Link>
                                    {/* button end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      {/* <TeamSection />
      <CallToActionSection /> */}
    </>
  );
};
export default Home1;