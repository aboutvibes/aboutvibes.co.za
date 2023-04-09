import { useState } from "react";
import NavData from "./NavData";

import { FaTh, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  let mobileNav;

  if (!open) {
    mobileNav = (
      <nav className="md:hidden h-full fixed right-0 top-0 bg-black w-full flex justify-center items-center z-50">
        <FaTimes
          onClick={() => setOpen(!open)}
          className="text-gray-100 absolute top-12 right-3 text-4xl border-2 border-black hover:bg-gray-100 hover:text-black rounded-full hover:border-gray-100 cursor-pointer"
        />

        <ul className="w-4/5 p-2 flex flex-col mb-80">
          {NavData.map((data) => (
            <li
              data-te-ripple-init
              data-te-ripple-color="light"
              className="mt-2 p-2 hover:text-white text-gray-100 text-2xl capitalize transition duration-150 ease-in-out"
              key={data.title}
            >
              <Link href={data.link} onClick={() => setOpen(!open)}>
                {data.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  const desktopNav = (
    <nav className="md:block sm:hidden">
      <ul className="flex p-2">
        {NavData.map((data) => (
          <li
            className="text-xl capitalize mx-2 hover:text-gray-400 hover:transition-all text-gray-700"
            key={data.title}
          >
            <Link href={data.link}>{data.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      <FaTh
        className="text-3xl cursor-pointer md:hidden"
        onClick={() => setOpen(!open)}
      />
      {mobileNav}
      {desktopNav}
    </>
  );
};

export default Navbar;
