import React from 'react';
import Image from "next/image";
import { siteName } from "@/constants";
import Section from "@/components/Section";
import { MapPin, RadioTower, Zap } from "lucide-react";

const Hero = () => {
  return (
    <main className="lg:overflow-hidden">
      <Section classNames="relative w-full h-full 2xl:max-h-[800px] pt-[120px] lg:pt-[160px] mx-auto">
        <div className="w-full h-full flex flex-col space-y-10 items-center justify-center">
          <article className="w-full text-center">
            <h1 className="text-[40px] lg:text-[60px] font-[700] text-bold capitalize z-20 text-brandText lg:w-[90%]">
              Ready for <span className="text-brandColorAlt">Dubai?</span> <span className="text-brandColorAlt">Apply online</span>, approval in 24* hours
            </h1>
          </article>
          <div className="relative w-full max-w-[500px] mx-auto lg:w-[45%] lg:ml-auto">
            <div className="bg-[#39A0FF] flex items-start w-full h-[400px] lg:w-[450px] lg:h-[450px] rounded-full">
              <div className="absolute top-[65%] left-0 lg:-left-14 flex items-center border border-accent gap-x-1 bg-brandBg dark:border-none whitespace-nowrap p-2 px-4 rounded-full shadow-xl z-20">
                <MapPin className="text-brandBg fill-yellow-500 w-8 h-8" />
                <p className="text-sm font-semibold">Top Places</p>
              </div>
              <div className="absolute bottom-10 right-0 lg:right-14 flex items-center border border-accent gap-x-1 bg-brandBg dark:border-none whitespace-nowrap p-2 px-4 rounded-full shadow-xl z-20">
                <Zap className="text-brandBg fill-yellow-500 w-8 h-8" />
                <p className="text-sm font-semibold">Fast Booking</p>
              </div>
              <div className="absolute top-[30%] -right-2 flex items-start border border-accent gap-x-2 bg-brandBg dark:border-none whitespace-nowrap p-3 px-5 rounded-lg shadow-xl z-20">
                <RadioTower className="text-yellow-500 mt-1 w-5 h-5" />
                <div>
                  <p className="text-brandColor text-xl font-semibold">3000 +</p>
                  <p className="text-[12px]">Customers</p>
                </div>
              </div>
              <Image
                src={"/home/hero/hero-layer.png"}
                width={500}
                height={500}
                className="absolute w-full h-full object-contain scale-125 bottom-16 right-16"
                alt="girl booking flight"
              />
              <Image
                src={"/home/hero/flight-girl.png"}
                width={500}
                height={500}
                className="w-full h-full scale-105 -mt-3 object-contain rounded-b-full"
                alt="girl booking flight"
              />
            </div>
          </div>
        </div>
      </Section>
      <Image
        src={"/home/hero/hero-vector.png"}
        width={500}
        height={500}
        className="block absolute right-0 top-[65%] lg:top-[50%] object-contain w-[500px] h-[500px]"
        alt="girl booking flight"
      />
    </main>
  )
}

export default Hero
