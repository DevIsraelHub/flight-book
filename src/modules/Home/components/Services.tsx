import Section from "@/components/Section"
import Image from "next/image"
import React from 'react'

const Services = () => {
  return (
    <Section classNames="w-full h-full pt-[250px] xs:pt-40 pb-14 lg:pt-20 lg:pb-24 mx-auto">
      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-6">
        <div className="space-y-2">
          <h3 className="uppercase text-md font-semibold text-brandColorAlt">WHAT WE SERVE</h3>
          <h1 className="capitalize text-3xl font-bold">
            Top Values <br className="hidden lg:block" /> For You
          </h1>
          <p className="text-sm text-gray-500">Embrace life's vastness, venture forth.</p>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col sm:flex-row gap-y-6 items-center justify-center sm:justify-between">
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src="/home/services/travel.svg"
              width={150}
              height={150}
              className="w-14 h-14 sm:w-24 sm:h-24"
              alt="travel loggages"
            />
            <h2 className="font-semibold text-lg py-2">
              Lot of choices
            </h2>
            <p className="text-xs text-gray-500 sm:max-w-[150px] text-center">Explore different choices at your fingertip.</p>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src="/home/services/yellow-paper.svg"
              width={150}
              height={150}
              className="w-12 h-12 sm:w-20 sm:h-20"
              alt="travel loggages"
            />
            <h2 className="font-semibold text-lg py-2">
              Best Tour Guide
            </h2>
            <p className="text-xs text-gray-500 sm:max-w-[150px] text-center">Explore the best tour guide with us</p>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src="/home/services/card.svg"
              width={150}
              height={150}
              className="w-12 h-12 sm:w-20 sm:h-20"
              alt="travel loggages"
            />
            <h2 className="font-semibold text-lg py-2">
              Easy Booking
            </h2>
            <p className="text-xs text-gray-500 sm:max-w-[150px] text-center">Easy booking wihin 24 hours.</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Services
