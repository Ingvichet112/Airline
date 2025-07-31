"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaGlobeAmericas, FaPlane, FaPhoneAlt } from "react-icons/fa";
import { BiMessageRoundedError } from "react-icons/bi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "#home", icon: FaHome },
    { name: "Destinations", href: "#destinations", icon: FaGlobeAmericas },
    { name: "About", href: "#features", icon: BiMessageRoundedError },
    { name: "Services", href: "#services", icon: FaPlane },
    { name: "Contact", href: "#contact", icon: FaPhoneAlt },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        delay: 0.2,
      },
    },
    open: {
      opacity: 1,
    },
  };

  const itemVariants = {
    closed: {
      x: 50,
      opacity: 0,
    },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    }),
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="navbar max-w-7xl mx-auto px-4 sm:px-6">
          <div className="navbar-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10  from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                <a href="#">
                  <img
                    src="/airplain.png"
                    alt="Logo"
                    className="w-8 h-8 object-contain"
                  />
                </a>
              </div>
              <a
                href="#"
                className={`text-xl font-bold transition-colors ${
                  isScrolled ? "text-gray-800" : "text-white cursor-pointer"
                }`}
              >
                Airline
              </a>
            </motion.div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className={`hover:bg-primary/10 rounded-lg transition-colors px-4 py-2 ${
                      isScrolled
                        ? "text-gray-700 hover:text-primary"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="navbar-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary btn-sm hidden sm:inline-flex shadow-lg"
              onClick={() => setShowSignIn(true)}
            >
              Sign In
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`lg:hidden relative z-50 p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 6 }
                      : { rotate: 0, y: 0 }
                  }
                  className="w-6 h-0.5 bg-current block transition-all duration-300 origin-center"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-6 h-0.5 bg-current block mt-1.5 transition-all duration-300"
                />
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -6 }
                      : { rotate: 0, y: 0 }
                  }
                  className="w-6 h-0.5 bg-current block mt-1.5 transition-all duration-300 origin-center"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden"
            >
              {/* Menu Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <img
                        src="/airplain.png"
                        alt="Logo"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">AirLine</h2>
                      <p className="text-blue-100 text-sm">Discover Cambodia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Content */}
              <div className="flex flex-col h-full pt-8 pb-30">
                {/* Navigation Items */}
                <nav className="flex-1 px-6">
                  <ul className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.name}
                        custom={index}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        <a
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                        >
                          <span className="text-gray-600 group-hover:text-primary group-hover:scale-110 transition-all">
                            <item.icon size={24} />
                          </span>
                          <span className="text-gray-800 font-medium text-lg group-hover:text-primary transition-colors">
                            {item.name}
                          </span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Bottom Section */}
                <div className="px-6 space-y-4 border-t border-gray-100 pt-6">
                  <motion.button
                    custom={navItems.length}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn btn-primary btn-lg shadow-lg"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setShowSignIn(true);
                    }}
                  >
                    Sign In
                  </motion.button>

                  <motion.div
                    custom={navItems.length + 1}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="text-center pt-4"
                  >
                    <p className="text-gray-400 text-xs">
                      &copy; {new Date().getFullYear()} Airline. All rights
                      reserved.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Sign In Modal with backdrop for outside click to close */}
      {showSignIn && (
        <>
          {/* Backdrop - all screen sizes */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={() => setShowSignIn(false)}
          />

          {/* Modal container - responsive for mobile and desktop */}
          <div
            className="fixed inset-0 flex items-center justify-center z-50 sm:absolute sm:inset-auto sm:right-4 sm:top-16 sm:flex-none"
            style={{ pointerEvents: "none" }}
          >
            <section
              className="w-full max-w-sm sm:w-auto bg-transparent sm:bg-transparent p-4 sm:p-0"
              onClick={(e) => e.stopPropagation()}
              style={{ pointerEvents: "auto" }}
            >
              <div className="relative w-full rounded-2xl shadow-xl bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 p-6 sm:p-8 space-y-6 sm:space-y-8">
                {/* Close button */}
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
                  onClick={() => setShowSignIn(false)}
                >
                  ×
                </button>

                <div className="text-center">
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                    Sign in
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Choose your provider below
                  </p>
                </div>

                {/* Social Buttons */}
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition-all"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
                    </svg>
                    Facebook
                  </button>

                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold shadow transition-all"
                  >
                    <svg
                      className=" w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 50 50"
                      color="white"
                    >
                      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                    </svg>
                    GitHub
                  </button>

                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white border border-gray-300 hover:bg-gray-300 text-gray-700 font-semibold shadow transition-all"
                  >
                    <svg className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
                    </svg>
                    Google
                  </button>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
