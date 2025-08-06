import { assets } from "..//..//..//assets//assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="Header background"
          className="w-full"
          priority
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-[rgba(255,255,255,0.5)] backdrop-blur-lg shadow-sm dark:bg-[var{--dark-theme}] dark:shadow-white/50 dark:bg-transparent"
            : ""
        } `}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-48 cursor-pointer mr-14"
            width={192}
            height={48}
            alt="logo"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "shadow-sm  bg-[rgba(255,255,255,0.5)] dark:border dark:border-white/50 dark:bg-transparent  "
          }`}
        >
          <li>
            <a className="font-[var(--font-ovo)]" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-[var(--font-ovo)]" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="font-[var(--font-ovo)]" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="font-[var(--font-ovo)]" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="font-[var(--font-ovo)]" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="font-[var(--font-ovo)]" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-[var(--font-ovo)] dark:border-white/50"
          >
            Contact{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt=""
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[var(--dark-hover)] dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a
              className="font-[var(--font-ovo)]"
              onClick={closeMenu}
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-[var(--font-ovo)]"
              onClick={closeMenu}
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              className="font-[var(--font-ovo)]"
              onClick={closeMenu}
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="font-[var(--font-ovo)]"
              onClick={closeMenu}
              href="#work"
            >
              My work
            </a>
          </li>
          <li>
            <a
              className="font-[var(--font-ovo)]"
              onClick={closeMenu}
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
