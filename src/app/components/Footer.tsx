"use client";

import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer(): JSX.Element {
  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background text-white py-4 sm:py-6 w-full">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex flex-col items-center space-y-4 sm:space-y-5">
          <p className="text-xs sm:text-sm text-gray-400 text-center">
            © 2024 OffsureIT. All rights reserved.
          </p>
          
          <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <div className="flex gap-3 sm:gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
