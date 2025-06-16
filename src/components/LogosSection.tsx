import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Install lucide-react or use any icon

const LogosSection = ({ logos }) => {
  const logosPerPage = 6; // 3 per row × 2 rows
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(logos.length / logosPerPage);

  const handlePrev = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : totalPages - 1));
  };

  const paginatedLogos = logos.slice(
    currentPage * logosPerPage,
    currentPage * logosPerPage + logosPerPage
  );

  return (
    <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 py-16 px-4 md:px-12 rounded-2xl shadow-inner relative">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Some Clients We Work With
      </h2>

      {/* Arrow buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow hover:bg-gray-100"
        disabled={currentPage === 0}
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow hover:bg-gray-100"
        disabled={currentPage === totalPages - 1}
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Logos grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        {paginatedLogos.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex justify-center items-center transition-transform transform hover:scale-105"
          >
            <div className="bg-white p-4 rounded-xl shadow-md w-32 md:w-40 h-24 flex items-center justify-center hover:shadow-xl transition-all duration-300">
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogosSection;
