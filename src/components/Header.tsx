import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../../public/logo.png';
import { PhoneCall } from 'lucide-react';

const Header = () => {
  return (
    <motion.header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white backdrop-blur-lg shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
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

          <div className="hidden md:flex items-center space-x-8">
            {[
              'Home',
              'About',
              'Services',
              'Portfolio',
              'Clients',
              'Contact',
            ].map(item => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-poppins font-medium  hover:text-luxury-gold transition-colors relative group text-gray-900"
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-luxury-gold to-luxury-rose transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* <motion.button
            className="bg-gradient-to-r from-luxury-gold to-luxury-rose text-white px-6 py-2 rounded-full font-poppins font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Quote
          </motion.button> */}
          <a href="tel:01871861888" className="hover:underline">
            <motion.div
              className="flex items-center gap-2 text-black font-semibold text-lg md:text-xl"
              whileHover={{ scale: 1.05 }}
            >
              <PhoneCall className="w-5 h-5 text-orange-500" />
              <span className="tracking-wide font-poppins">01871-861888</span>
            </motion.div>
          </a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
