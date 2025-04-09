import React, {  useState } from "react";
import { Menu } from "lucide-react";
import { motion,  AnimatePresence } from "framer-motion";
import { Link } from "react-scroll"; // ✅ Import smooth scrolling

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <nav className={`relative-group top-0 left-0 w-full p-4 z-50 transition-all duration-300`}>
      <div className="container flex items-center">
        {/* Logo */}
        <div className="w-48 h-16 bg-cover bg-center" style={{ backgroundImage: "url('/logo.svg')" }}></div>

        {/* Desktop Menu */}
        <div className="hidden md:block space-x-6 mx-auto bg-gray-900 rounded shadow-md shadow-black px-3 py-3">
          <Link to="home" smooth={true} duration={500} className="text-white hover:text-gray-500 cursor-pointer duration-200">Home</Link>
          <Link to="services" smooth={true} duration={500} className="text-white hover:text-gray-500 cursor-pointer duration-200">Services</Link>
          <Link to="about" smooth={true} duration={500} className="text-white hover:text-gray-500 cursor-pointer duration-200">About</Link>
          <Link to="contact" smooth={true} duration={500} className="text-white hover:text-gray-500 cursor-pointer duration-200">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 absolute right-0" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} className="text-black" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black text-[#EDF2F4] p-4 mt-2 shadow-md shadow-black rounded text-center"
          >
            <Link to="home" smooth={true} duration={500} className="block py-2 cursor-pointer">Home</Link>
            <Link to="services" smooth={true} duration={500} className="block py-2 cursor-pointer">Services</Link>
            <Link to="about" smooth={true} duration={500} className="block py-2 cursor-pointer">About</Link>
            <Link to="contact" smooth={true} duration={500} className="block py-2 cursor-pointer">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
