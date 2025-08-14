import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { navItems } from "../assets/data";
import Button from "../components/button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="max-w-[1320px] mx-auto bg-white shadow-md px-4 py-5 flex items-center md:justify-around justify-between">
      <img src="/secura-logo.png" alt="" width={120} />

      {/* Desktop Nav */}
      <nav className="hidden md:flex md:items-center md:gap-5 space-x-6 ">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            {item.name}
          </a>
        ))}
        <a href="https://secura-pwa.vercel.app/">
          {" "}
          <Button text="Book a Ride" dark={true} />{" "}
        </a>
      </nav>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-2xl text-gray-700"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Open navigation menu"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Mobile Nav Dropdown with smooth transition */}
      <nav
        className={`absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 z-50 transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="py-3 text-gray-700 hover:text-blue-600 font-medium w-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <div className="my-3">
          <a href="https://secura-pwa.vercel.app/">
            {" "}
            <Button text="Book a Ride" dark={true} />{" "}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
