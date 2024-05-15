"use client";

import React, { useEffect, useState } from 'react';
import Logo from "../Logo";
import NavItem from "./components/NavItem";
import { Button } from "../ui/button";
import { navItems, phoneNumber } from "@/constants";
import { useScrolling } from "@/hooks/useScrolling";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header className={`w-full bg-white fixed z-50 ${isActive && "shadow-lg"}`}>
      <nav className="w-full mx-auto px-4 lg:px-24 xl:px-20 flex items-center justify-between h-[80px] max-w-[1500px]">
        <Logo />
        <ul className="hidden text-sm font-semibold xl:flex items-center lg:gap-x-8 xl:gap-x-10">
          {
            navItems.map((item, index) => (
              <NavItem label={item.name} href={item.href} key={index} />
            ))
          }
        </ul>
        <Button asChild className={`space-x-2 rounded-full bg-gradient-to-r from-brandColor from-15% to-brandColorAlt px-5 py-6 sm:px-6 sm:p-6 ${!isActive && "shadow-xl"} shadow-[#5D50C6]/40`}>
          <Link target="_blank" href={`https://wa.me/${phoneNumber}`}>
            <BsWhatsapp className="w-6 h-6" />
            <p>Chat with Us</p>
          </Link>
        </Button>
      </nav >
    </header>
  )
}

export default Navbar
