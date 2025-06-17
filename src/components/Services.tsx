import { motion } from 'framer-motion';
import { Volume2, Calendar, Printer, Palette } from 'lucide-react';
import av from '../../public/service/av.png';
import ev from '../../public/service/ev.png';
import print from '../../public/service/pn.png';
import interior from '../../public/service/ex.jpg';

const Services = () => {
  const services = [
    {
      icon: av,
      title: 'Audio-Visual Production',
      description:
        'State-of-the-art sound systems, professional lighting, LED screens, and truss setups',
      features: [
        'High Equipment Production House',
        'Audio Visual Production (HD, 4K)',
        'Shortfilm',
        'Documentary',
        'TVC',
        'Online Content Production',
        'High Standard Script Writing',
        'Post Production & High Tech Edit Panel',
      ],
      gradient: 'from-luxury-gold to-luxury-rose',
    },
    {
      icon: ev,
      title: 'Event Management',
      description:
        'Complete event planning and execution from concept to celebration',
      features: [
        'Stage & Venue Decoration',
        'Artist Booking',
        'Security Equipment',
        'HR/Volunteer Crew',
      ],
      gradient: 'from-luxury-emerald to-luxury-sapphire',
    },
    {
      icon: print,
      title: 'Printing & Packaging',
      description:
        'High-quality printing solutions and branded promotional materials',
      features: [
        'PVC Banners',
        'Branded Gifts',
        'Promotional Materials',
        'Custom Packaging',
      ],
      gradient: 'from-luxury-rose to-luxury-gold',
    },
    {
      icon: interior,
      title: 'Interior & Exhibition Design',
      description:
        'Creative interior decoration and professional stall design services',
      features: [
        'Interior Decoration',
        'Stall Design',
        'Exhibition Setup',
        'Custom Installations',
      ],
      gradient: 'from-luxury-sapphire to-luxury-emerald',
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-montserrat font-bold text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-500 to-luxury-gold bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for all your event and production needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/30 h-full group-hover:shadow-2xl transition-all duration-500">
                {/* Icon */}
                {/* <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div> */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r  rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden`}
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-poppins text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="font-poppins text-sm text-gray-700 flex items-center"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/10 to-luxury-rose/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="bg-gradient-to-r from-luxury-gold to-luxury-rose text-white px-10 py-4 rounded-full font-poppins font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Discuss Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
