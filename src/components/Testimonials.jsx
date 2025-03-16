import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Hear what others have to say about my work.
          </p>
        </div>
        {/* Add testimonials content here */}
      </div>
    </section>
  );
};

export default Testimonials; // Ensure this line is present
