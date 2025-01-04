import React, { useState } from 'react';
import interImage from '@assets/inter.png'; // Mengimpor gambar

const HeroPageInter: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    setMousePosition({ x: mouseX, y: mouseY });
  };

  const xRotation = (mousePosition.x - window.innerWidth / 2) / 30;
  const yRotation = (mousePosition.y - window.innerHeight / 2) / 30;

  return (
    <section
      className="flex flex-col-reverse md:flex-row items-center mt-2 bg-slate-900 text-white p-6 md:px-16 lg:px-32"
      onMouseMove={handleMouseMove}
    >
      {/* Left Side - Text Content */}
      <div className="text-center sm:text-left md:w-1/2 mt-6 p-6 md:p-8">
        <h1 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-bold mb-4">
          Go Internasional Yuk!
        </h1>
        <p className="text-base sm:text-lg md:text-lg mb-6">
          Yuk, temuin berbagai job keren di sekitar kamu. Pilih yang pas buat kamu, dan siap-siap melangkah ke karier yang makin oke!
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src={interImage} // Menggunakan gambar yang sudah diimpor
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

export default HeroPageInter;
