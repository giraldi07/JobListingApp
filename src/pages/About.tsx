import React from 'react';
import { FaGithub, FaRegFileAlt, FaUsers, FaGlobeAmericas, FaHeart } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <section className="mt-24 text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-500 mb-4">Tentang JobFinder</h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Cari informasi lowongan pekerjaan terbaru, baik lokal maupun internasional, dengan mudah!
        </p>
      </section>

      {/* What is JobFinder */}
      <section className="bg-slate-800 p-6 sm:p-8 rounded-lg shadow-xl mb-16 max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <FaRegFileAlt className="text-3xl text-blue-500 mr-4" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Apa Itu JobFinder?</h2>
        </div>
        <p className="text-gray-300 mb-4">
          JobFinder adalah platform yang memudahkan kamu mencari lowongan pekerjaan terbaru secara cepat dan akurat.
          Kami mengumpulkan data lowongan pekerjaan baik dari situs lokal maupun internasional, yang selalu diperbarui secara berkala agar kamu tidak ketinggalan informasi.
        </p>
        <p className="text-gray-300">
          Kalau ada masalah atau kamu menemukan bug, langsung aja klik ikon{' '}
          <a href="https://github.com/giraldi07/JobListingApp/issues" className="text-blue-400 hover:underline flex items-center">
            <FaGithub className="mr-2" /> GitHub
          </a> 
          untuk melaporkan ke kami. Kami siap membantu!
        </p>
      </section>

      {/* Why Choose JobFinder */}
      <section className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-500 mb-8">Kenapa Pilih JobFinder?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="flex items-center space-x-4 p-6 bg-slate-800 rounded-lg shadow-lg">
            <FaRegFileAlt className="text-4xl text-blue-500" />
            <p className="text-gray-300 text-lg">
              Lowongan terbaru, up to date setiap saat.
            </p>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-slate-800 rounded-lg shadow-lg">
            <FaUsers className="text-4xl text-blue-500" />
            <p className="text-gray-300 text-lg">
              Cari pekerjaan lokal atau internasional dengan mudah.
            </p>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-slate-800 rounded-lg shadow-lg">
            <FaGlobeAmericas className="text-4xl text-blue-500" />
            <p className="text-gray-300 text-lg">
              Data terus diperbarui untuk memberikan informasi yang akurat.
            </p>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-slate-800 rounded-lg shadow-lg">
            <FaGithub className="text-4xl text-blue-500" />
            <p className="text-gray-300 text-lg">
              Kalau ada error atau bug, laporkan langsung melalui GitHub.
            </p>
          </div>
        </div>
      </section>

      {/* Support Developer */}
      <section className="bg-slate-800 p-6 sm:p-8 rounded-lg shadow-xl mb-16 max-w-4xl mx-auto flex items-center justify-center">
        <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Dukung Pengembangan Developer</h2>
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            Jika kamu merasa terbantu dengan aplikasi ini, kamu bisa mendukung pengembangan lebih lanjut dengan cara mengunjungi dan mendukung saya di{' '}
            <a href="https://teer.id/giraldi_pra" className="text-blue-400 hover:underline flex items-center justify-center mt-10">
                <FaHeart className="mr-2 text-red-500" /> teer.id/giraldi_pra
            </a>
            </p>
        </div>
      </section>

    </div>
  );
};

export default About;
