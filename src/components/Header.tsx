import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../public/logo.png';
import { PhoneCall, Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  // Optional: prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const navItems = [
    'Home',
    'About',
    'Services',
    'Portfolio',
    'Clients',
    'Gallery',
    'AV',
    'Contact',
  ];

  return (
    <motion.header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white backdrop-blur-lg shadow-lg">
      <nav className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="w-28 h-10 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={logo}
              alt="BD-Event-Express"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => {
              const isAV = item.toLowerCase() === 'av';
              const href = isAV
                ? 'https://www.youtube.com/@eventexpressbd'
                : `#${item.toLowerCase()}`;
              const externalProps = isAV
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {};

              return (
                <motion.a
                  key={item}
                  href={href}
                  {...externalProps}
                  className="font-poppins font-medium hover:text-luxury-gold transition-colors relative group text-gray-900"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  {!isAV && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-luxury-gold to-luxury-rose transition-all duration-300 group-hover:w-full"></span>
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Call Button */}
          <a href="tel:01871861888" className="hover:underline hidden md:block">
            <motion.div
              className="flex items-center gap-2 text-black font-semibold text-lg md:text-xl"
              whileHover={{ scale: 1.05 }}
            >
              <PhoneCall className="w-5 h-5 text-orange-500" />
              <span className="tracking-wide font-poppins">01871-861888</span>
            </motion.div>
          </a>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {navItems.map(item => {
                const isAV = item.toLowerCase() === 'av';
                const href = isAV
                  ? 'https://www.youtube.com/@eventexpressbd'
                  : `#${item.toLowerCase()}`;
                const externalProps = isAV
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {};

                return (
                  <a
                    key={item}
                    href={href}
                    {...externalProps}
                    onClick={() => setMenuOpen(false)}
                    className="font-poppins text-gray-800 hover:text-luxury-gold transition-colors"
                  >
                    {item}
                  </a>
                );
              })}

              {/* Call in Mobile */}
              <a
                href="tel:01871861888"
                className="mt-2 font-poppins font-medium text-lg text-orange-600"
              >
                <PhoneCall className="inline-block w-5 h-5 mr-1" />
                01871-861888
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
