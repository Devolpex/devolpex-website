import dynamic from 'next/dynamic';
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import AboutSectionTree from '@/components/About/AboutSectionTree';

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="At Devolpex, we are committed to deliver top-notch IT solutions that drive innovation and success. 🌟 Our mission is to empower businesses with cutting-edge technology and tailor-made solutions. 💼 Our vision is to be a global leader in IT services, recognized for our excellence, integrity, and client-centric approach. 🌐 Our core values include innovation, collaboration, excellence, and customer satisfaction. 🚀"
      />
      <AboutSectionTree/>
    </>
  );
};

export default AboutPage;