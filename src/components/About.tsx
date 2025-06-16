import { motion } from 'framer-motion';
import { Users, Calendar, Award, Target } from 'lucide-react';
import img1 from '../../public/image/aboutus/event1.jpg';
import img2 from '../../public/image/aboutus/widding.jpg';
import img3 from '../../public/image/aboutus/jci.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-luxury-sapphire/10 to-luxury-emerald/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-luxury-rose/10 to-luxury-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src={img1}
                  alt="Professional event setup"
                  className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
                <img
                  src={img2}
                  alt="Event ambiance"
                  className="rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                />
              </div>
              <div className="pt-12">
                <img
                  src={img3}
                  alt="High-tech event production"
                  className="rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-luxury-gold to-luxury-rose text-white px-6 py-3 rounded-full font-poppins font-semibold shadow-2xl">
              Since 12-12-12
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h2
                className="font-montserrat font-bold text-5xl mb-6 
             bg-gradient-to-r from-[#C99700] via-[#FFD700] to-[#B8860B] 
             bg-clip-text text-transparent tracking-tight drop-shadow-sm"
              >
                About Us
              </h2>

              <p className="font-poppins text-lg text-gray-600 leading-relaxed mb-6">
                Founded on 12-12-12, Bangladesh Event Express began as a vision
                to revolutionize the event management industry. Our young,
                energetic team has grown into a powerhouse of creativity and
                technical excellence.
              </p>
              <p className="font-poppins text-lg text-gray-600 leading-relaxed">
                We've expanded beyond traditional event management into
                cutting-edge AV production, innovative event design, and
                comprehensive interior & exhibition services, always staying
                ahead of industry trends.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="text-3xl font-bold bg-gradient-to-r from-luxury-gold to-luxury-rose bg-clip-text text-transparent">
                  12+
                </div>
                <div className="text-gray-600 font-poppins">
                  Years Experience
                </div>
              </div>
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="text-3xl font-bold bg-gradient-to-r from-luxury-emerald to-luxury-sapphire bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-gray-600 font-poppins">
                  Events Delivered
                </div>
              </div>
            </div>

            {/* 6E Philosophy */}
            <div className="bg-gradient-to-r from-luxury-gold/10 to-luxury-rose/10 p-6 rounded-2xl">
              <h3 className="font-montserrat font-bold text-2xl mb-4 bg-gradient-to-r from-luxury-sapphire to-luxury-emerald bg-clip-text text-transparent">
                Our 6E Philosophy
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm font-poppins text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                  Ethical
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-luxury-rose rounded-full"></div>
                  Economical
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-luxury-emerald rounded-full"></div>
                  Eloquent
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-luxury-sapphire rounded-full"></div>
                  Extensive
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-luxury-platinum rounded-full"></div>
                  Extra-Caring
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                  Excellent
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
