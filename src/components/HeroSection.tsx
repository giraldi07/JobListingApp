import React, { useState } from 'react';

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    setMousePosition({ x: mouseX, y: mouseY });
  };

  const xRotation = (mousePosition.x - window.innerWidth / 2) / 30;
  const yRotation = (mousePosition.y - window.innerHeight / 2) / 30;

  return (
    <section
      className="flex flex-col-reverse md:flex-row items-center mt-20 bg-slate-900 text-white p-6 md:px-16 lg:px-32"
      onMouseMove={handleMouseMove}
    >
      {/* Left Side - Text Content */}
      <div className="text-center md:text-left md:w-1/2 mt-6 p-8">
        <h1 className="text-2xl sm:text-sm md:text-2xl lg:text-4xl font-bold mb-4">
          Temukan Lowongan Pekerjaan Impianmu
        </h1>
        <p className="text-base sm:text-md md:text-md mb-6">
          Jelajahi berbagai pilihan pekerjaan di berbagai bidang, baik lokal maupun internasional, untuk masa depan karier yang lebih baik.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src="/src/assets/hero.png" // Replace with your image URL
          alt="Hero"
          className="w-full h-auto transition-transform duration-500 ease-in-out bounce-animation"
          style={{
            transform: `rotateX(${yRotation}deg) rotateY(${xRotation}deg)`,
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
