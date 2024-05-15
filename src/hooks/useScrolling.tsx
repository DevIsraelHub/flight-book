"use client";

import { useEffect, useState } from "react";

export const useScrolling = () => {

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentPosition = window.pageYOffset;

      setScrolling(currentPosition > scrollTop);
      setScrollTop(currentPosition);
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [scrollTop]);

  return { scrolling }
}