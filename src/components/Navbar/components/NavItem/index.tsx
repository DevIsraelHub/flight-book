"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react'

type NavItemProps = {
  href: string;
  label: string;
  className?: string;
}

const NavItem = ({ href, label, className }: NavItemProps) => {

  const pathname = usePathname();

  return (
    <Link href={href} className={`py-3 hover:text-brandColor transition-colors ${pathname.includes(href) ? "text-brandColor font-bold" : "text-brandTextDull"} ${className}`}>
      {label}
    </Link>
  )
}

export default NavItem