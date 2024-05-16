import Section from "@/components/Section"
import { Button } from "@/components/ui/button"
import { destinations, email, phoneNumber, siteName } from "@/constants"
import Image from "next/image"
import React from 'react'

const About = () => {
  return (
    <Section classNames="mx-auto pb-20 pt-10">
      <div className="w-full h-full flex items-center flex-col-reverse lg:flex-row justify-between gap-y-12">
        <div className="w-full lg:w-1/2">
          <Image
            width={500}
            height={500}
            src="/home/about/about-banner.png"
            className="w-full h-full"
            alt="image about us"
          />
        </div>
        <div className="w-full lg:w-[45%]">
          <header>
            <h3 className="uppercase text-brandColorAlt font-semibold">About Us</h3>
            <h2 className="text-3xl lg:text-5xl capitalize leading-loosed my-2 font-bold">
              Unlock Your Dream Destination <span className="text-brandColorAlt">With Us</span>
            </h2>
          </header>
          <p className="text-sm text-brandTextDull my-6">
            At {siteName}, we are dedicated to providing efficient and reliable processing for Single Entry Applications with Insurance. Our team understands the importance of timely and accurate service, offering both standard processing in 4 business days and expedited processing in just 2 business days. We pride ourselves on delivering a seamless experience, ensuring your application is handled with care and professionalism. Trust {siteName} for quick, dependable, and comprehensive service tailored to meet your specific needs.
          </p>
          <div className="grid grid-cols-2 gap-5">
            <div className="text-center w-full h-[160px] bg-brandBg rounded-2xl p-6 border dark:border-none flex items-center justify-center flex-col">
              <h2 className="text-3xl text-brandColorAlt font-bold">24/7</h2>
              <p className="text-sm text-brandText">Customer Support</p>
            </div>
            <div className="text-center w-full h-[160px] bg-brandBg rounded-2xl p-6 border dark:border-none flex items-center justify-center flex-col">
              <h2 className="text-3xl text-brandColorAlt font-bold">100%</h2>
              <p className="text-sm text-brandText">Dedication</p>
            </div>
            <div className="text-center w-full h-[160px] bg-brandBg rounded-2xl p-6 border dark:border-none flex items-center justify-center flex-col">
              <h2 className="text-3xl text-brandColorAlt font-bold">100%</h2>
              <p className="text-sm text-brandText">Customer Satisfaction</p>
            </div>
            <div className="text-center w-full h-[160px] bg-brandBg rounded-2xl p-6 border dark:border-none flex items-center justify-center flex-col">
              <h2 className="text-3xl text-brandColorAlt font-bold">3000+</h2>
              <p className="text-sm text-brandText">Customers</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
