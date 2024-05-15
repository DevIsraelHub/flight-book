import { siteName } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import React from 'react'


const Logo = () => {
  return (
    <Link href="/" className="text-lg font-bold">
      {siteName}
    </Link>
  )
}

export default Logo
