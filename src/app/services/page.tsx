// import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Services from "@/components/Services";
import AllServices from "@/components/Services/AllServices";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const ServicePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Service Page"
        description="Welcome to our Services page at Devolpex! Here, we offer a comprehensive suite of digital solutions tailored to meet your unique business needs. From state-of-the-art web development and innovative mobile app creation to advanced software application development and intuitive UI/UX design, our expert team is dedicated to transforming your vision into reality. Explore our robust cloud services and top-tier cybersecurity solutions to ensure your business remains agile, secure, and at the forefront of technology. At Devolpex, we empower your digital journey with excellence and innovation."
      />
      <AllServices />
    </>
  );
};

export default ServicePage;
