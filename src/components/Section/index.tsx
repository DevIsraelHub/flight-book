import React from 'react'

const Section = ({ id, children, classNames }: {
  children: React.ReactNode;
  classNames?: string;
  id?: string;
}) => {
  return (
    <section id={id} className={`w-full h-full px-4 lg:px-24 xl:px-20 max-w-[1500px] ${classNames}`}>
      {children}
    </section>
  )
}

export default Section
