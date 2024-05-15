import Section from "@/components/Section"
import { Button } from "@/components/ui/button"
import { destinations, email, phoneNumber } from "@/constants"
import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from 'react'
import { BsWhatsapp } from "react-icons/bs"
import { CiMail } from "react-icons/ci"

const Destinations = () => {
  return (
    <Section classNames="mx-auto pb-20">
      <div>
        <h3 className="uppercase text-brandColorAlt text-md font-semibold">
          choose your next destination
        </h3>
        <h1 className="font-semibold text-2xl lg:text-3xl">
          Explore top destination
        </h1>

        {/* Card Destinations */}
        <div className="grid md:grid-cols-2 gap-10 gap-y-14 lg:grid-cols-3 mt-10">
          {
            destinations.map((item, index) => (
              <div key={index}>
                <Link href={`https://wa.me/${phoneNumber}`}>
                  <div className="relative group rounded-3xl bg-gray-300 w-full h-[270px] overflow-hidden cursor-pointer">
                    <Image
                      src={item.image}
                      width={400}
                      height={400}
                      className="w-full h-full group-hover:scale-125 transition-transform object-cover"
                      alt="destination image"
                    />
                    <span className="absolute right-3 top-3 flex items-center gap-x-[5px] bg-black/50 p-2 px-3 rounded-full border border-gray-600 transition-all">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <p className="text-xs font-semibold text-white">5.0</p>
                    </span>
                    <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t from-black/70" />
                    <h2 className="absolute bottom-3 left-3 text-white font-semibold text-lg">
                      {item.name}
                    </h2>
                  </div>
                </Link>
                <ul className="py-4 pb-5">
                  <p className="text-lg pb-2 font-bold leading-6">
                    {item.title}
                  </p>
                  <li className="text-sm pb-1">
                    {item.listOne}
                  </li>
                  <li className="text-sm">
                    {item.listTwo}
                  </li>
                </ul>
                <div className="w-full flex gap-x-3">
                  <Button asChild variant="secondary" className="w-full rounded-full py-6 gap-x-2">
                    <Link href={`mailto:${email}`}>
                      <CiMail className="h-5 w-5" />
                      Email
                    </Link>
                  </Button>
                  <Button asChild className="w-full rounded-full py-6 bg-brandColor gap-x-2 float-right shadow-xl  shadow-[#5D50C6]/40">
                    <Link href={`https://wa.me/${phoneNumber}`}>
                      <BsWhatsapp />
                      Whatsapp
                    </Link>
                  </Button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Section>
  )
}

export default Destinations
