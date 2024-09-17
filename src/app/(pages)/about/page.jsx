import React from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import AboutTwoSection from "@components/sections/AboutTwo";
import FeaturesOneSection from "@/src/app/_components/sections/Features";
import PromoVideoSection from "@components/sections/PromoVideo";
import TeamSection from "@components/sections/Team";
import CallToActionTwoSection from "@components/sections/CallToActionTwo";

const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

export const metadata = {
  title: {
		default: "About",
	},
  description:"At Meltz we strive to mark your memories through our range of sweets."
}

const About1 = () => {
  return (
    <div className="aboutGridMain">
      {/* <PageBanner pageTitle={"About us."} breadTitle={"About us"} type={1} /> */}
      <AboutTwoSection />
    
      <PromoVideoSection />
      {/* <TeamSection /> */}
      {/* <TestimonialSlider /> */}
      {/* <CallToActionTwoSection /> */}
    </div>
  );
};
export default About1;