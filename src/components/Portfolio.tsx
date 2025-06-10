// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import Conference from '../../public/protfolio/conferance.jpg';
// import wedding from '../../public/protfolio/widding.jpg';
// import concert from '../../public/protfolio/music.jpg';
// import exhibition from '../../public/protfolio/carexvision.jpg';
// import Award from '../../public/protfolio/award.jpg';
// import CulturalFestival from '../../public/protfolio/cultural.jpg';

// const Portfolio = () => {
//   const [activeFilter, setActiveFilter] = useState('all');

//   const filters = ['all', 'corporate', 'wedding', 'concert', 'exhibition'];

//   const portfolioItems = [
//     {
//       id: 1,
//       title: 'Conference',
//       category: 'corporate',
//       image: Conference,
//       description: 'International business conference with 500+ attendees',
//     },
//     {
//       id: 2,
//       title: 'Luxury Wedding',
//       category: 'wedding',
//       image: wedding,
//       description: 'Elegant wedding ceremony with premium decorations',
//     },
//     {
//       id: 3,
//       title: 'Music Festival',
//       category: 'concert',
//       image: concert,
//       description: 'Large scale outdoor music festival production',
//     },
//     {
//       id: 4,
//       title: 'Car Exhibition',
//       category: 'exhibition',
//       image: exhibition,
//       description: 'Interactive technology showcase and stall design',
//     },
//     {
//       id: 5,
//       title: 'Award Ceremony',
//       category: 'corporate',
//       image: Award,
//       description: 'High-impact product launch with AV production',
//     },
//     {
//       id: 6,
//       title: 'Cultural Festival',
//       category: 'concert',
//       image: CulturalFestival,
//       description: 'Traditional cultural celebration with modern production',
//     },
//   ];

//   const filteredItems =
//     activeFilter === 'all'
//       ? portfolioItems
//       : portfolioItems.filter(item => item.category === activeFilter);

//   return (
//     <section
//       id="portfolio"
//       className="py-20 bg-gradient-to-b from-white to-slate-50"
//     >
//       <div className="container mx-auto px-6">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="font-montserrat font-bold text-5xl md:text-6xl mb-6 bg-gradient-to-r from-gray-900 to-luxury-gold bg-clip-text text-transparent">
//             Our Portfolio
//           </h2>
//           <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto mb-12">
//             Explore our remarkable events and productions that have created
//             lasting memories
//           </p>

//           {/* Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-4">
//             {filters.map(filter => (
//               <button
//                 key={filter}
//                 onClick={() => setActiveFilter(filter)}
//                 className={`px-6 py-3 rounded-full font-poppins font-medium transition-all duration-300 ${
//                   activeFilter === filter
//                     ? 'bg-gradient-to-r from-luxury-gold to-luxury-rose text-white shadow-lg'
//                     : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
//                 }`}
//               >
//                 {filter.charAt(0).toUpperCase() + filter.slice(1)}
//               </button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Portfolio Grid */}
//         <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
//           {filteredItems.map((item, index) => (
//             <motion.div
//               key={item.id}
//               className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10 }}
//               layout
//             >
//               <div className="aspect-[4/3] overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//               </div>

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                   <h3 className="font-montserrat font-bold text-xl mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="font-poppins text-sm opacity-90">
//                     {item.description}
//                   </p>
//                   <div className="mt-4">
//                     <span className="inline-block bg-luxury-gold/20 text-luxury-gold px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
//                       {item.category}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Glassmorphism Card */}
//               <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-lg rounded-2xl p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
//                 <h3 className="font-montserrat font-bold text-lg text-gray-900 mb-1">
//                   {item.title}
//                 </h3>
//                 <p className="font-poppins text-sm text-gray-600">
//                   {item.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* View All Button */}
//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <button className="bg-gradient-to-r from-luxury-gold to-luxury-rose text-white px-10 py-4 rounded-full font-poppins font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
//             View Complete Portfolio
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

import { useState } from 'react';
import Conference from '../../public/protfolio/conferance.jpg';
import wedding from '../../public/protfolio/widding.jpg';
import concert from '../../public/protfolio/music.jpg';
import exhibition from '../../public/protfolio/carexvision.jpg';
import Award from '../../public/protfolio/jciawords.jpg';
import CulturalFestival from '../../public/protfolio/cultural.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All Work', icon: '✨' },
    { key: 'corporate', label: 'Corporate', icon: '🏢' },
    { key: 'wedding', label: 'Weddings', icon: '💍' },
    { key: 'concert', label: 'Concerts', icon: '🎵' },
    { key: 'exhibition', label: 'Exhibitions', icon: '🎨' },
  ];
  const portfolioItems = [
    {
      id: 2,
      title: 'Luxury Wedding',
      category: 'wedding',
      image: wedding,
      description: 'Elegant wedding ceremony with premium decorations',
    },

    {
      id: 3,
      title: 'Music Festival',
      category: 'concert',
      image: concert,
      description: 'Large scale outdoor music festival production',
    },
    {
      id: 6,
      title: 'Cultural Festival',
      category: 'concert',
      image: CulturalFestival,
      description: 'Traditional cultural celebration with modern production',
    },
    {
      id: 4,
      title: 'Car Exhibition',
      category: 'exhibition',
      image: exhibition,
      description: 'Interactive technology showcase and stall design',
    },
    {
      id: 5,
      title: 'Award Ceremony',
      category: 'corporate',
      image: Award,
      description: 'High-impact product launch with AV production',
    },

    {
      id: 1,
      title: 'Conference',
      category: 'corporate',
      image: Conference,
      description: 'International business conference with 500+ attendees',
    },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-slate-600">
              Our Latest Work
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Creative
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover our collection of extraordinary events and productions that
            have
            <span className="text-blue-600 font-semibold">
              {' '}
              captivated audiences{' '}
            </span>
            and created unforgettable experiences.
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16">
          {filters.map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`group relative px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-500 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/25 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 border border-slate-200/50'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">{filter.icon}</span>
                {filter.label}
              </span>
              {activeFilter === filter.key && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-50 -z-10"></div>
              )}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards',
              }}
            >
              {/* Image Container with Overlay */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Hover Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    {item.category.charAt(0).toUpperCase() +
                      item.category.slice(1)}
                  </span>

                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 flex items-center gap-1">
                    Learn More
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
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
                  </button>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl scale-105"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 sm:mt-24">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl shadow-blue-500/25">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project and bring your vision to
              life with our expertise and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <span>View All Projects</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
