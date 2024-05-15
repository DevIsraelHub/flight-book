import React from 'react'
import Navbar from "../Navbar"
import Footer from "../Footer";

const MainLayout = ({ children, classNames }: {
  classNames?: string;
  children: React.ReactNode;
}) => {
  return (
    <main className={`${classNames}`}>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default MainLayout
