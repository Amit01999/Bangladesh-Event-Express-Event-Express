import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../../public/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* <motion.div
            className="font-montserrat font-bold text-2xl bg-gradient-to-r from-luxury-gold to-luxury-rose bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Bangladesh Event Express
          </motion.div> */}

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
                className={`font-poppins font-medium  hover:text-luxury-gold transition-colors relative group ${
                  isScrolled ? 'text-gray-800' : 'text-gray-100'
                }`}
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-luxury-gold to-luxury-rose transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          <motion.button
            className="bg-gradient-to-r from-luxury-gold to-luxury-rose text-white px-6 py-2 rounded-full font-poppins font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Quote
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
