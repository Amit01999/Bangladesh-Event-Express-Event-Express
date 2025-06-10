// import { motion } from 'framer-motion';
// import { ChevronDown } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen relative overflow-hidden">
//       {/* Hero Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/488887143_1193703912550994_8980612214189895030_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE6m_L1vKVPBoeChSYPhEd3XIO5d-pZhKFcg7l36lmEoZhPQqs21dDxBrZtv_KdTvaJajOuuvyfIa9vQvjZs-fV&_nc_ohc=1-y-5-5QrwMQ7kNvwGWKUCT&_nc_oc=AdkpOIfNM5eUkurai6fDsyvAKn9xotRDZPpdpITagsLlkLUtCJIiNq7hZxg1BqGff28&_nc_zt=23&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=F2kvK4KKwDcy8T_ejvA3mg&oh=00_AfPRyFC7Gwh7TmZ7vXRxQOUj4ZT6XxsOIihrtbMXNW5qQg&oe=6848A4F4"
//           alt="Event production setup with multiple screens and lighting"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
//       </div>

//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 z-10">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-luxury-gold/20 to-luxury-rose/20 rounded-full blur-3xl animate-float"></div>
//         <div
//           className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-luxury-emerald/20 to-luxury-sapphire/20 rounded-full blur-3xl animate-float"
//           style={{ animationDelay: '2s' }}
//         ></div>
//         <div
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-luxury-platinum/10 to-luxury-gold/20 rounded-full blur-3xl animate-float"
//           style={{ animationDelay: '4s' }}
//         ></div>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-20 container mx-auto px-6 pt-32 pb-20">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.h1
//             className="font-montserrat font-bold text-6xl md:text-8xl lg:text-9xl mb-8 bg-gradient-to-r from-luxury-platinum via-luxury-gold to-luxury-rose bg-clip-text text-transparent leading-tight"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.2 }}
//           >
//             Bangladesh Event Express
//           </motion.h1>

//           <motion.p
//             className="font-poppins text-2xl md:text-3xl bg-gradient-to-r from-luxury-emerald via-luxury-sapphire to-luxury-rose bg-clip-text text-transparent mb-4"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//           >
//             Crafting Experiences, Creating Moments
//           </motion.p>

//           <motion.p
//             className="font-poppins text-lg text-luxury-platinum mb-12 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.7 }}
//           >
//             Premium event management, AV production, and creative services since
//             12-12-12. We transform your vision into extraordinary experiences.
//           </motion.p>

//           <motion.div
//             className="flex flex-col sm:flex-row gap-6 justify-center items-center"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.9 }}
//           >
//             <button className="bg-gradient-to-r from-luxury-gold via-luxury-rose to-luxury-emerald text-white px-10 py-4 rounded-full font-poppins font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-glow">
//               Let's Create Your Event
//             </button>
//             <button className="border-2 border-luxury-gold text-luxury-gold px-10 py-4 rounded-full font-poppins font-semibold text-lg hover:bg-gradient-to-r hover:from-luxury-gold hover:to-luxury-rose hover:text-white hover:border-transparent transition-all duration-300">
//               View Portfolio
//             </button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         <ChevronDown className="w-8 h-8 text-luxury-gold" />
//       </motion.div>

//       {/* Floating Elements */}
//       <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-gradient-to-r from-luxury-rose to-luxury-emerald rounded-full animate-float opacity-60 z-10"></div>
//       <div
//         className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gradient-to-r from-luxury-emerald to-luxury-sapphire rounded-full animate-float opacity-40 z-10"
//         style={{ animationDelay: '1s' }}
//       ></div>
//       <div
//         className="absolute top-2/3 right-1/3 w-3 h-3 bg-gradient-to-r from-luxury-gold to-luxury-platinum rounded-full animate-float opacity-80 z-10"
//         style={{ animationDelay: '3s' }}
//       ></div>

//       {/* Additional Decorative Images */}
//       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent z-15"></div>
//     </section>
//   );
// };

// export default Hero;

import { useState, useEffect } from 'react';
import img1 from '../../public/image/slider/1.1.png';
import img2 from '../../public/image/slider/2.1.jpg';
import img3 from '../../public/image/slider/3.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      id: 1,
      url: img1,
      title: 'Elegant Wedding Moments',
      subtitle: 'Professional conferences & business events',
    },
    {
      id: 2,
      url: img2,
      title: 'Luxury Wedding Experience',
      subtitle: 'Magical moments & luxury celebrations',
    },
    {
      id: 3,
      url: img3,
      title: 'Unforgettable Celebrations',
      subtitle: 'Concerts & festivals that captivate',
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            {/* Dynamic overlay based on current slide */}
            <div
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide
                  ? 'bg-gradient-to-br from-black/60 via-black/40 to-black/70'
                  : 'bg-black/50'
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
          style={{
            animation: 'float 6s ease-in-out infinite',
            animationDelay: '2s',
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/15 to-blue-500/20 rounded-full blur-3xl"
          style={{
            animation: 'float 8s ease-in-out infinite',
            animationDelay: '4s',
          }}
        ></div>

        {/* Small floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-white/40 to-blue-300/60 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Company Name */}
          <div className="mb-6">
            <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
                Bangladesh
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
                Event Express
              </span>
            </h1>
          </div>

          {/* Dynamic Tagline based on current slide */}
          <div className="mb-6 h-20 flex items-center justify-center">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold transition-all duration-1000">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                {heroImages[currentSlide].title}
              </span>
            </p>
          </div>

          {/* Main Description */}
          <div className="mb-12">
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
              <span className="font-semibold text-blue-300">
                Premium event management
              </span>
              , AV production, and creative services since
              <span className="font-bold text-purple-300"> 12-12-12</span>
            </p>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              We transform your vision into extraordinary experiences that
              captivate and inspire.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
            <button className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Let's Create Your Event</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group border-2 border-white/50 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-slate-900 hover:border-white backdrop-blur-sm transition-all duration-300">
              <span className="flex items-center gap-2">
                View Portfolio
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mb-8">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 scale-125 shadow-lg'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              { number: '500+', label: 'Events Completed' },
              { number: '12+', label: 'Years Experience' },
              { number: '50K+', label: 'Happy Clients' },
              { number: '100%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent z-15"></div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) rotate(-5deg);
          }
          75% {
            transform: translateY(-15px) rotate(3deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
