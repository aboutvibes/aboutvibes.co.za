"use client";

import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-[15vh] px-2 md:flex-col">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
