import { motion } from 'framer-motion';
import { Building2, Users, Globe, Video, Award, MapPin } from 'lucide-react';
import c1 from '../../public/patner/Dept Archieves library.png';
import c2 from '../../public/patner/Mole.png';
import c3 from '../../public/patner/SMC.png';
import c4 from '../../public/patner/Unicef logo.png';
import c5 from '../../public/patner/armac services limited.png';
import c6 from '../../public/patner/bbc janala.png';
import c7 from '../../public/patner/elite force logo.png';
import c8 from '../../public/patner/ministry of cultural affairs.png';
import c9 from '../../public/patner/petronaz.png';
import c10 from '../../public/patner/php family.png';
import c11 from '../../public/patner/securex.jpg';
import c12 from '../../public/patner/unitech.jpg';
import c13 from '../../public/patner/বাংলাদেশ_মেরিন_একাডেমীর_লোগো.png';
import LogosSection from './LogosSection';
// import c14 from '../../public/patner/Ministry of Cultural Affairs.png';
// import c15 from '../../public/patner/Ministry of Welfare.png';
// import c16 from '../../public/patner/Embassy of Nepal Dhaka.png';
// import c17 from '../../public/patner/PRAN-RFL.png';
// import c18 from '../../public/patner/Italiano.png';
// import c19 from '../../public/patner/PHP Family.png';
// import c20 from '../../public/patner/Elite Force.png';

const Clients = () => {
  const clientCategories = [
    {
      title: 'Private Sector',
      count: '40+',
      description: 'Leading corporations and businesses',
      gradient: 'from-luxury-gold to-luxury-rose',
      icon: Building2,
      clients: [
        'PRAN-RFL',
        'Italiano',
        'PHP Family',
        'Elite Force',
        'Securex',
        'Square Food & Beverage Ltd.',
        'Armac Services Ltd.',
        'Konka',
        'Unitec',
        'Gree',
        'iLeven',
      ],
    },
    {
      title: 'Government & Development',
      count: '25+',
      description: 'Government agencies and ministries',
      gradient: 'from-luxury-emerald to-luxury-sapphire',
      icon: Users,
      clients: [
        'Department of Archives & Library',
        'Department of Copyright',
        'Department of Archaeology',
        'Gen Lab',
        'United Nations Association (BD, UK)',
        'Sena Kunjo',
        'Sena Malancho',
        'PSC Hall (Police Convention Hall) Mirpur 14',
        'ZamZam Tower (Uttara)',
        'Bangladesh Maritime University (Mirpur)',
        'Bangladesh Army & Army Welfare Trust',
        'Ministry of Labour & Employment',
        'Ministry of Cultural Affairs',
        'Ministry of Welfare',
        'Embassy of Nepal, Dhaka',
      ],
    },
    {
      title: 'Audio-Visual Production',
      count: '15+',
      description: 'Media and production organizations',
      gradient: 'from-luxury-rose to-luxury-gold',
      icon: Video,
      clients: [
        'UNICEF',
        'USAID',
        'GAVI Alliance',
        'Tetra Pack',
        'Petregaz Corporate',
        'International Labour Organization',
        'Department of Archives & Library',
        'SMC',
        'JCI Bangladesh',
        'Armac Services Limited',
      ],
    },
  ];

  const clientLogos = [
    {
      name: 'Dept Archieves library',
      logo: c1,
      category: 'Private Sector',
    },

    {
      name: 'SMC',
      logo: c3,
      category: 'Development',
    },
    {
      name: 'Unicef',
      logo: c4,
      category: 'International',
    },
    {
      name: 'armac services limited',
      logo: c5,
      category: 'Private Sector',
    },
    {
      name: 'Mole',
      logo: c2,
      category: 'Government',
    },
    {
      name: 'bbc janala',
      logo: c6,
      category: 'Development',
    },
    {
      name: 'elite force',
      logo: c7,
      category: 'Private Sector',
    },
    {
      name: 'ministry of cultural affairs',
      logo: c8,
      category: 'Government',
    },
    {
      name: 'petronaz',
      logo: c9,
      category: 'Government',
    },
    {
      name: 'php family',
      logo: c10,
      category: 'Government',
    },
    {
      name: 'securex',
      logo: c11,
      category: 'Government',
    },
    {
      name: 'unitech',
      logo: c12,
      category: 'Government',
    },
    {
      name: 'বাংলাদেশ_মেরিন_একাডেমীর_লোগো',
      logo: c13,
      category: 'Government',
    },
  ];

  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  const testimonials = [
    {
      quote:
        'Bangladesh Event Express transformed our corporate summit into an unforgettable experience. Their attention to detail and professional execution exceeded our expectations.',
      author: 'Sarah Ahmed',
      position: 'Marketing Director, PRAN-RFL Group',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    },
    {
      quote:
        "The team's creativity and technical expertise made our cultural event absolutely magical. Every moment was perfectly orchestrated with deep understanding of our heritage.",
      author: 'Dr. Kamal Hassan',
      position: 'Director, PHP Family',
      avatar: '',
    },
    {
      quote:
        'Professional, reliable, and innovative. Bangladesh Event Express has been our go-to partner for all major conferences and awareness campaigns.',
      author: 'Maria Rodriguez',
      position: 'Program Manager, UNICEF Bangladesh',
      avatar: '',
    },
  ];

  return (
    <section
      id="clients"
      className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-luxury-emerald/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Award className="w-8 h-8 text-luxury-gold" />
            <h2 className="font-montserrat font-bold text-5xl md:text-6xl bg-gradient-to-r from-gray-900 via-luxury-gold to-luxury-rose bg-clip-text text-transparent">
              Our Prestigious Clients
            </h2>
            <Award className="w-8 h-8 text-luxury-rose" />
          </motion.div>
          <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations across Bangladesh and beyond - from
            government ministries to international development agencies
          </p>
        </motion.div>

        {/* Enhanced Client Categories with Detailed Lists */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {clientCategories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/40 overflow-hidden group-hover:shadow-3xl transition-all duration-700 group-hover:scale-105">
                {/* Header Section */}
                <div
                  className={`bg-gradient-to-r ${category.gradient} p-8 text-white relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <category.icon className="w-12 h-12 text-white/90" />
                      <span className="font-montserrat font-bold text-3xl">
                        {category.count}
                      </span>
                    </div>
                    <h3 className="font-montserrat font-bold text-2xl mb-2">
                      {category.title}
                    </h3>
                    <p className="font-poppins text-white/90 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Clients List */}
                <div className="p-8 max-h-96 overflow-y-auto custom-scrollbar">
                  <div className="space-y-3">
                    {category.clients.map((client, clientIndex) => (
                      <motion.div
                        key={clientIndex}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/50 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/80 transition-all duration-300 group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: clientIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} opacity-70 group-hover/item:opacity-100 transition-opacity duration-300`}
                        ></div>
                        <span className="font-poppins text-gray-700 text-sm group-hover/item:text-gray-900 transition-colors duration-300">
                          {client}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer with client count */}
                <div className="px-8 pb-6">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="font-poppins">Total Clients</span>
                    <span className="font-montserrat font-semibold">
                      {category.clients.length}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Client Logos Section with Auto-Scroll */}
        {/* <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="font-montserrat font-bold text-2xl md:text-4xl mb-3 md:mb-4 bg-gradient-to-r from-luxury-gold via-luxury-rose to-luxury-emerald bg-clip-text text-transparent">
              Our Trusted Partners
            </h3>
            <p className="font-poppins text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4">
              Proud to collaborate with industry leaders and innovative
              organizations worldwide
            </p>
          </div>

          <div className="bg-white py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Some Clients We Work With
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {duplicatedLogos.map((client, index) => (
                <div key={`${client.name}-${index}`} className="w-32 md:w-40">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-auto object-contain "
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-luxury-emerald animate-pulse delay-100"></div>
            <div className="w-2 h-2 rounded-full bg-luxury-rose animate-pulse delay-200"></div>
          </div>
        </motion.div> */}
        <LogosSection logos={duplicatedLogos} />

        {/* Enhanced Testimonials Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mt-5 mb-12">
            <h3 className="font-montserrat font-bold text-4xl mb-4 bg-gradient-to-r from-gray-900 to-luxury-gold bg-clip-text text-transparent">
              What Our Clients Say
            </h3>
            <p className="font-poppins text-gray-600 max-w-2xl mx-auto">
              Hear from our valued partners about their experience working with
              us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-luxury-gold/10 to-transparent rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="text-luxury-gold text-5xl mb-4 font-serif leading-none">
                      "
                    </div>
                    <p className="font-poppins text-gray-700 italic leading-relaxed text-lg">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-luxury-gold/20"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-luxury-gold/20 to-transparent"></div>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-gray-900 text-lg">
                        {testimonial.author}
                      </h4>
                      <p className="font-poppins text-sm text-gray-600">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>

      {/* Custom scrollbar styles */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        /* Pause animation on hover */
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Custom scrollbar styles */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #d4af37, #ff6b9d);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #b8941f, #e5578a);
        }
      `}</style>
    </section>
  );
};

export default Clients;
