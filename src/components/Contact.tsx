// import { motion } from 'framer-motion';
// import { MapPin, Phone, Mail } from 'lucide-react';

// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-100">
//       <div className="container mx-auto px-6">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="font-montserrat font-bold text-5xl md:text-6xl mb-6 bg-gradient-to-r from-gray-900 to-luxury-gold bg-clip-text text-transparent">
//             Let's Create Together
//           </h2>
//           <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto">
//             Ready to transform your vision into an extraordinary experience? Get in touch with us today.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-16">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/30">
//               <h3 className="font-montserrat font-bold text-3xl mb-8 text-gray-900">
//                 Start Your Project
//               </h3>

//               <form className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="font-poppins font-medium text-gray-700 block mb-2">
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
//                       placeholder="John"
//                     />
//                   </div>
//                   <div>
//                     <label className="font-poppins font-medium text-gray-700 block mb-2">
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
//                       placeholder="Doe"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="font-poppins font-medium text-gray-700 block mb-2">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
//                     placeholder="john@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="font-poppins font-medium text-gray-700 block mb-2">
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
//                     placeholder="+880 1XXX XXXXXX"
//                   />
//                 </div>

//                 <div>
//                   <label className="font-poppins font-medium text-gray-700 block mb-2">
//                     Event Type
//                   </label>
//                   <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/70 backdrop-blur-sm">
//                     <option>Select Event Type</option>
//                     <option>Corporate Event</option>
//                     <option>Wedding</option>
//                     <option>Concert/Festival</option>
//                     <option>Exhibition</option>
//                     <option>Other</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="font-poppins font-medium text-gray-700 block mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     rows={5}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
//                     placeholder="Tell us about your event vision..."
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-luxury-gold to-luxury-rose text-white py-4 rounded-xl font-poppins font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </motion.div>

//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className="space-y-8">
//               {/* Contact Details */}
//               <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/30">
//                 <h3 className="font-montserrat font-bold text-2xl mb-6 text-gray-900">
//                   Get In Touch
//                 </h3>

//                 <div className="space-y-6">
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-luxury-gold to-luxury-rose rounded-xl flex items-center justify-center flex-shrink-0">
//                       <MapPin className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <h4 className="font-poppins font-semibold text-gray-900 mb-1">Office Address</h4>
//                       <p className="font-poppins text-gray-600">
//                         Dhaka, Bangladesh<br />
//                         (Exact address to be provided)
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-luxury-emerald to-luxury-sapphire rounded-xl flex items-center justify-center flex-shrink-0">
//                       <Phone className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <h4 className="font-poppins font-semibold text-gray-900 mb-1">Phone</h4>
//                       <p className="font-poppins text-gray-600">
//                         +880 1XXX XXXXXX<br />
//                         +880 1XXX XXXXXX
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-luxury-rose to-luxury-gold rounded-xl flex items-center justify-center flex-shrink-0">
//                       <Mail className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <h4 className="font-poppins font-semibold text-gray-900 mb-1">Email</h4>
//                       <p className="font-poppins text-gray-600">
//                         info@bangladesheventexpress.com<br />
//                         events@bangladesheventexpress.com
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Social Media & Quick Contact */}
//               <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/30">
//                 <h3 className="font-montserrat font-bold text-2xl mb-6 text-gray-900">
//                   Quick Connect
//                 </h3>

//                 <div className="grid grid-cols-2 gap-4">
//                   <button className="bg-green-500 text-white py-3 px-4 rounded-xl font-poppins font-medium hover:bg-green-600 transition-colors duration-300">
//                     WhatsApp
//                   </button>
//                   <button className="bg-blue-600 text-white py-3 px-4 rounded-xl font-poppins font-medium hover:bg-blue-700 transition-colors duration-300">
//                     Facebook
//                   </button>
//                   <button className="bg-pink-500 text-white py-3 px-4 rounded-xl font-poppins font-medium hover:bg-pink-600 transition-colors duration-300">
//                     Instagram
//                   </button>
//                   <button className="bg-red-600 text-white py-3 px-4 rounded-xl font-poppins font-medium hover:bg-red-700 transition-colors duration-300">
//                     YouTube
//                   </button>
//                 </div>
//               </div>

//               {/* Map Placeholder */}
//               <div className="bg-gray-200 h-64 rounded-3xl flex items-center justify-center">
//                 <p className="font-poppins text-gray-600">Google Map Integration</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-12 sm:py-20 bg-gradient-to-b from-white to-slate-100"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-luxury-gold bg-clip-text text-transparent px-2">
            Let's Create Together
          </h2>
          <p className="font-poppins text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ready to transform your vision into an extraordinary experience? Get
            in touch with us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-lg p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-white/30">
              <h3 className="font-montserrat font-bold text-2xl sm:text-3xl mb-6 sm:mb-8 text-gray-900">
                Start Your Project
              </h3>

              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="font-poppins font-medium text-sm sm:text-base text-gray-700 block mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="font-poppins font-medium text-sm sm:text-base text-gray-700 block mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-poppins font-medium text-sm sm:text-base text-gray-700 block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="font-poppins font-medium text-sm sm:text-base text-gray-700 block mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                    placeholder="+880 1XXX XXXXXX"
                  />
                </div>

                <div>
                  <label className="font-poppins font-medium text-sm sm:text-base text-gray-700 block mb-2">
                    Event Type
                  </label>
                  <select className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/70 backdrop-blur-sm">
                    <option>Select Event Type</option>
                    <option>Corporate Event</option>
                    <option>Wedding</option>
                    <option>Concert/Festival</option>
                    <option>Exhibition</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-poppins font-medium text-sm sm:text-base text-gray-700 block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none"
                    placeholder="Tell us about your event vision..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-luxury-gold to-luxury-rose text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-poppins font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Details */}
              <div className="bg-white/80 backdrop-blur-lg p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-white/30">
                <h3 className="font-montserrat font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-gray-900">
                  Get In Touch
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-luxury-gold to-luxury-rose rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-poppins font-semibold text-sm sm:text-base text-gray-900 mb-1">
                        Office Address
                      </h4>
                      <p className="font-poppins text-sm sm:text-base text-gray-600 break-words">
                        Dhaka, Bangladesh
                        {/* <br />
                        (Exact address to be provided) */}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-luxury-emerald to-luxury-sapphire rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-poppins font-semibold text-sm sm:text-base text-gray-900 mb-1">
                        Phone
                      </h4>
                      <p className="font-poppins text-sm sm:text-base text-gray-600 break-words">
                        01871-861888
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-luxury-rose to-luxury-gold rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-poppins font-semibold text-sm sm:text-base text-gray-900 mb-1">
                        Email
                      </h4>
                      <p className="font-poppins text-sm sm:text-base text-gray-600 break-words">
                        eventexpress.bd@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media & Quick Contact */}
              <div className="bg-white/80 backdrop-blur-lg p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-white/30">
                <h3 className="font-montserrat font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-gray-900">
                  Quick Connect
                </h3>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/1234567890" // Replace with your WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-poppins font-medium text-sm sm:text-base hover:bg-green-600 transition-colors duration-300 active:scale-95 text-center inline-block"
                  >
                    WhatsApp
                  </a>

                  {/* Facebook Button */}
                  <a
                    href="https://web.facebook.com/eventexpress.bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-poppins font-medium text-sm sm:text-base hover:bg-blue-700 transition-colors duration-300 active:scale-95 text-center inline-block"
                  >
                    Facebook
                  </a>

                  {/* Instagram Button - Disabled since no link provided */}
                  <a
                    href="https://web.facebook.com/eventexpress.bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-poppins font-medium text-sm sm:text-base active:scale-95 text-center inline-block "
                  >
                    Instagram
                  </a>
                  {/* <button className="bg-pink-500/50 text-white/70 py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-poppins font-medium text-sm sm:text-base cursor-not-allowed opacity-60">
                    Instagram
                  </button> */}

                  {/* YouTube Button */}
                  <a
                    href="https://youtube.com/@eventexpressbd?si=TV7OWMXt6SMdHkCp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-poppins font-medium text-sm sm:text-base hover:bg-red-700 transition-colors duration-300 active:scale-95 text-center inline-block"
                  >
                    YouTube
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 h-48 sm:h-64 rounded-2xl sm:rounded-3xl flex items-center justify-center">
                <p className="font-poppins text-sm sm:text-base text-gray-600">
                  Google Map Integration
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
