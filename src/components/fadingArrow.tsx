import React, { useState, useEffect } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

export const FadingArrow = () => {
  const [scroll, setscroll] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setscroll(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BsChevronDoubleDown
      style={{
        visibility: scroll === 0 ? "visible" : "hidden",
        opacity: scroll === 0 ? 1 : 0,
      }}
    />
  );
};
