import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Logo from "../Logo";
import Section from "../Section";
import Link from "next/link";
import { company, contact, support } from "@/constants";

function Footer() {
  return (
    <Section classNames="border-t mx-auto">
      <div className="h-1/2 w-full flex md:flex-row flex-col justify-between items-start py-20">
        <div className="p-5 ">
          <ul>
            <div className="max-w-[300px] space-y-3">
              <Logo />
              <p className="text-brandTextDull text-sm pb-6">
                Apply online, get approved in 24* hours. Your Dubai adventure starts now
              </p>
            </div>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-brandColor text-3xl cursor-pointer hover:text-red-500" />
              <FaTwitter className="text-brandColor text-3xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-brandColor text-3xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-brandColor text-3xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-brandText font-bold text-xl pb-6">Company</p>
            {
              company.map((item, index) => (
                <li className="text-brandTextDull text-sm pb-4 hover:text-brandColor cursor-pointer" key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-brandText font-bold text-xl pb-6">Support</p>
            {
              support.map((item, index) => (
                <li className="text-brandTextDull text-sm pb-4 hover:text-brandColor cursor-pointer" key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-brandText font-bold text-xl pb-6">Contact Us</p>
            {
              contact.map((item, index) => (
                <li className="flex items-center gap-x-3 text-brandTextDull text-sm pb-4 hover:text-brandColor cursor-pointer" key={index}>
                  {item.icon}
                  <p>{item.name}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center text-center px-3 md:px-5 p-5 border-t">
        <div className="flex items-center justify-between w-full text-brandText text-xs md:text-sm">
          <p>© 2024 All rights reserved</p>
          <span className="font-medium text-brandTextDull">
            Built by{" "}
            <Link className="text-brandColor" target="_blank" href="https://ejeh.vercel.app">Ejeh Israel</Link>{" "}
          </span>
        </div>
      </div>
    </Section>
  );
}

export default Footer;