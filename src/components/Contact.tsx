// import { motion } from 'framer-motion';
// import { MapPin, Phone, Mail } from 'lucide-react';
// import {
//   Facebook,
//   Instagram,
//   PhoneCall,
//   Youtube,
//   MessageSquareText,
// } from 'lucide-react';

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="py-12 sm:py-20 bg-gradient-to-b from-white to-slate-100"
//     >
//       <div className="container mx-auto px-4 sm:px-6">
//         <motion.div
//           className="text-center mb-12 sm:mb-16"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-luxury-gold bg-clip-text text-transparent px-2">
//             Let's Create Together
//           </h2>
//           <p className="font-poppins text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
//             Ready to transform your vision into an extraordinary experience? Get
//             in touch with us today.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="bg-white/80 backdrop-blur-lg p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-white/30">
//               <h3 className="font-montserrat font-bold text-2xl sm:text-3xl mb-6 sm:mb-8 text-gray-900">
//                 Start Your Project
//               </h3>

//               <form className="space-y-4 sm:space-y-6">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//                   <div>
//                     <label className="font-poppins font-medium text-sm sm:text-base text-gray-700 block mb-2">
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
//                       placeholder="John"
//                     />
//                   </div>
//                   <div>
//                     <label className="font-poppins font-medium text-sm sm:text-base text-gray-700 block mb-2">
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
//                       placeholder="Doe"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="font-poppins font-medium text-sm sm:text-base text-gray-700 block mb-2">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
//                     placeholder="john@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="font-poppins font-medium text-sm sm:text-base text-gray-700 block mb-2">
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
//                     placeholder="+880 1XXX XXXXXX"
//                   />
//                 </div>

//                 <div>
//                   <label className="font-poppins font-medium text-sm sm:text-base text-gray-700 block mb-2">
//                     Event Type
//                   </label>
//                   <select className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/70 backdrop-blur-sm">
//                     <option>Select Event Type</option>
//                     <option>Corporate Event</option>
//                     <option>Wedding</option>
//                     <option>Concert/Festival</option>
//                     <option>Exhibition</option>
//                     <option>Other</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="font-poppins font-medium text-sm sm:text-base text-gray-700 block mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     rows={4}
//                     className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none"
//                     placeholder="Tell us about your event vision..."
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-luxury-gold to-luxury-rose text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-poppins font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 active:scale-95"
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
//             <div className="space-y-6 sm:space-y-8">
//               {/* Contact Details */}
//               <div className="bg-white/80 backdrop-blur-lg p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-white/30">
//                 <h3 className="font-montserrat font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-gray-900">
//                   Get In Touch
//                 </h3>

//                 <div className="space-y-4 sm:space-y-6">
//                   <div className="flex items-start space-x-3 sm:space-x-4">
//                     <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-luxury-gold to-luxury-rose rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
//                       <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//                     </div>
//                     <div className="min-w-0 flex-1">
//                       <h4 className="font-poppins font-semibold text-sm sm:text-base text-gray-900 mb-1">
//                         Office Address
//                       </h4>
//                       <p className="font-poppins text-sm sm:text-base text-gray-600 break-words">
//                         Dhaka, Bangladesh
//                         {/* <br />
//                         (Exact address to be provided) */}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3 sm:space-x-4">
//                     <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-luxury-emerald to-luxury-sapphire rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
//                       <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//                     </div>
//                     <div className="min-w-0 flex-1">
//                       <h4 className="font-poppins font-semibold text-sm sm:text-base text-gray-900 mb-1">
//                         Phone
//                       </h4>
//                       <p className="font-poppins text-sm sm:text-base text-gray-600 break-words">
//                         01871-861888
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3 sm:space-x-4">
//                     <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-luxury-rose to-luxury-gold rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
//                       <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//                     </div>
//                     <div className="min-w-0 flex-1">
//                       <h4 className="font-poppins font-semibold text-sm sm:text-base text-gray-900 mb-1">
//                         Email
//                       </h4>
//                       <p className="font-poppins text-sm sm:text-base text-gray-600 break-words">
//                         eventexpress.bd@gmail.com
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Social Media & Quick Contact */}
//               <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-md border border-gray-200">
//                 <h3 className="font-montserrat font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-gray-900 flex items-center gap-2">
//                   <MessageSquareText className="w-5 h-5 text-yellow-500" />
//                   Quick Connect
//                 </h3>

//                 <div className="grid grid-cols-2 gap-3 sm:gap-4">
//                   {/* WhatsApp */}
//                   <a
//                     href="https://wa.me/1234567890"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2 bg-green-500 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-poppins font-medium text-sm sm:text-base hover:bg-green-600 transition duration-300 active:scale-95"
//                   >
//                     <PhoneCall className="w-4 h-4" />
//                     WhatsApp
//                   </a>

//                   {/* Facebook */}
//                   <a
//                     href="https://web.facebook.com/eventexpress.bd"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-poppins font-medium text-sm sm:text-base hover:bg-blue-700 transition duration-300 active:scale-95"
//                   >
//                     <Facebook className="w-4 h-4" />
//                     Facebook
//                   </a>

//                   {/* Instagram */}
//                   <a
//                     href="https://www.instagram.com/eventexpress.bd"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2 bg-pink-500 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-poppins font-medium text-sm sm:text-base hover:bg-pink-600 transition duration-300 active:scale-95"
//                   >
//                     <Instagram className="w-4 h-4" />
//                     Instagram
//                   </a>

//                   {/* YouTube */}
//                   <a
//                     href="https://youtube.com/@eventexpressbd?si=TV7OWMXt6SMdHkCp"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2 bg-red-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-poppins font-medium text-sm sm:text-base hover:bg-red-700 transition duration-300 active:scale-95"
//                   >
//                     <Youtube className="w-4 h-4" />
//                     YouTube
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, Award } from 'lucide-react';
import {
  Facebook,
  Instagram,
  PhoneCall,
  Youtube,
  MessageSquareText,
  CheckCircle,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  });

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-medium text-sm mb-6">
            <MessageSquareText className="w-4 h-4" />
            Get In Touch
          </div>

          <h2 className="font-montserrat font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-gray-800 via-gray-700 to-blue-600 bg-clip-text text-transparent leading-tight">
            Let's Create Something
            <span className="block text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">
              Extraordinary
            </span>
          </h2>

          <p className="font-poppins text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transform your vision into an unforgettable experience. We're here
            to bring your dream event to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-100/50 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-100/50 to-transparent rounded-full -ml-12 -mb-12"></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-luxury-gold rounded-2xl flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-2xl sm:text-3xl text-gray-900">
                      Start Your Project
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Fill out the form below and we'll get back to you within
                      24 hours
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="font-poppins font-medium text-gray-700 block mb-3 text-sm">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-300 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-gray-50/50 hover:bg-white group-hover:border-gray-200"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>

                    <div className="group">
                      <label className="font-poppins font-medium text-gray-700 block mb-3 text-sm">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-300 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-gray-50/50 hover:bg-white group-hover:border-gray-200"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="font-poppins font-medium text-gray-700 block mb-3 text-sm">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-300 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-gray-50/50 hover:bg-white group-hover:border-gray-200"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="group">
                      <label className="font-poppins font-medium text-gray-700 block mb-3 text-sm">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-300 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-gray-50/50 hover:bg-white group-hover:border-gray-200"
                        placeholder="+880 1XXX XXXXXX"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="font-poppins font-medium text-gray-700 block mb-3 text-sm">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-300 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-gray-50/50 hover:bg-white group-hover:border-gray-200"
                      required
                    >
                      <option value="">Select your event type</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="wedding">Wedding Celebration</option>
                      <option value="concert">Concert/Festival</option>
                      <option value="exhibition">Exhibition</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="font-poppins font-medium text-gray-700 block mb-3 text-sm">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-300 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-gray-50/50 hover:bg-white group-hover:border-gray-200 resize-none"
                      placeholder="Tell us about your event vision, expected date, guest count, and any special requirements..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    onClick={() => console.log('Form submitted:', formData)}
                    className="w-full bg-gradient-to-r from-amber-500 to-luxury-gold hover:from-[#A77800] hover:to-[#C29200] text-white py-4 px-8 rounded-2xl font-poppins font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    By submitting this form, you agree to our privacy policy and
                    terms of service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            {/* Contact Details Card */}
            <div className="bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-gray-100/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-gray-900">
                  Contact Info
                </h3>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-gray-900 mb-1">
                      Office Location
                    </h4>
                    <p className="font-poppins text-sm text-gray-600">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-gray-900 mb-1">
                      Call Us
                    </h4>
                    <p className="font-poppins text-sm text-gray-600">
                      01871-861888
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-gray-900 mb-1">
                      Email Us
                    </h4>
                    <p className="font-poppins text-sm text-gray-600 break-all">
                      eventexpress.bd@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Time Card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-3xl border border-amber-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-gray-900">
                  Quick Response
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                We typically respond within 2-4 hours during business hours.
              </p>
              <div className="flex items-center gap-2 text-sm text-amber-700">
                <CheckCircle className="w-4 h-4" />
                <span>Available 7 days a week</span>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-gray-100/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-xl flex items-center justify-center">
                  <MessageSquareText className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-gray-900">
                  Connect With Us
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <PhoneCall className="w-4 h-4" />
                  WhatsApp
                </a>

                <a
                  href="https://web.facebook.com/eventexpress.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/eventexpress.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>

                <a
                  href="https://youtube.com/@eventexpressbd?si=TV7OWMXt6SMdHkCp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <Youtube className="w-4 h-4" />
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
