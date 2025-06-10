import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-montserrat font-bold text-2xl mb-6 bg-gradient-to-r from-luxury-gold to-luxury-rose bg-clip-text text-transparent">
              Bangladesh Event Express
            </h3>
            <p className="font-poppins text-gray-300 mb-6 leading-relaxed">
              Crafting Experiences, Creating Moments since 12-12-12. We are your
              premier partner for exceptional events and professional AV
              production services.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://web.facebook.com/eventexpress.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>

              {/* Instagram - disabled since no link provided */}
              <div className="w-10 h-10 bg-pink-600/50 rounded-lg flex items-center justify-center cursor-not-allowed opacity-60">
                <Instagram className="w-5 h-5 text-white" />
              </div>

              {/* YouTube */}
              <a
                href="https://youtube.com/@eventexpressbd?si=TV7OWMXt6SMdHkCp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-montserrat font-bold text-xl mb-6 text-luxury-gold">
              Our Services
            </h4>
            <ul className="space-y-3 font-poppins text-gray-300">
              <li className="hover:text-luxury-gold transition-colors cursor-pointer">
                Audio-Visual Production
              </li>
              <li className="hover:text-luxury-gold transition-colors cursor-pointer">
                Event Management
              </li>
              <li className="hover:text-luxury-gold transition-colors cursor-pointer">
                Printing & Packaging
              </li>
              <li className="hover:text-luxury-gold transition-colors cursor-pointer">
                Interior & Exhibition Design
              </li>
              <li className="hover:text-luxury-gold transition-colors cursor-pointer">
                Artist Booking
              </li>
              <li className="hover:text-luxury-gold transition-colors cursor-pointer">
                Security Services
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-montserrat font-bold text-xl mb-6 text-luxury-gold">
              Quick Links
            </h4>
            <ul className="space-y-3 font-poppins text-gray-300">
              <li>
                <a
                  href="#home"
                  className="hover:text-luxury-gold transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-luxury-gold transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-luxury-gold transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-luxury-gold transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#clients"
                  className="hover:text-luxury-gold transition-colors"
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-luxury-gold transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-montserrat font-bold text-xl mb-6 text-luxury-gold">
              Contact Information
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold mt-1 flex-shrink-0" />
                <div className="font-poppins text-gray-300">
                  <p>Dhaka, Bangladesh</p>
                  {/* <p className="text-sm">(Exact address to be provided)</p> */}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <div className="font-poppins text-gray-300">
                  <p>01871-861888</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <div className="font-poppins text-gray-300">
                  <p>eventexpress.bd@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="font-poppins text-gray-400 text-center md:text-left mb-4 md:mb-0">
            © 2024 Bangladesh Event Express. All rights reserved. Founded
            12-12-12.
          </p>
          <div className="flex space-x-6 font-poppins text-sm text-gray-400">
            <a href="#" className="hover:text-luxury-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-luxury-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-luxury-gold transition-colors">
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
