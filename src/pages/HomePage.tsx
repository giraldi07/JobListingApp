import React, { useState } from 'react';
import JobList from '../components/JobList';
import AnotherJob from '../components/AnotherJob';
import HeroSection from '../components/HeroSection';
import AutoplayCarousel from '../components/AutoplayCarousel';

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'bumn' | 'swasta' | 'fresh'>('all');

  // Handle tab change
  const handleTabChange = (tab: 'all' | 'bumn' | 'swasta' | 'fresh') => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen p-6">
      <div className="mb-24 border-b border-slate-800">
        <HeroSection />
      </div>

      <div className="mt-10 mb-10 sm:mt-16 sm:mb-16 md:mt-20 md:mb-20 lg:mt-24 lg:mb-24 xl:mt-28 xl:mb-28 max-w-7xl mx-auto px-4">
        <AutoplayCarousel />
      </div>

      <div className="mt-20 mb-20 text-center bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
        <h2 className="text-3xl sm:text-2xl md:text-3xl font-extrabold text-blue-400 mb-6 flex items-center justify-center space-x-2">
          <span role="img" aria-label="lightbulb">💡</span> 
          <span>Tips Mencari Pekerjaan</span>
        </h2>
        <p className="text-lg sm:text-base md:text-lg text-gray-300 leading-relaxed mb-8">
          <span className="font-semibold text-white">Temukan pekerjaan impian</span> yang sesuai dengan <span className="font-semibold text-white">keahlian</span> dan <span className="font-semibold text-white">minat</span> Anda.  
          <br />💼 <span className="font-semibold text-white">Persiapkan CV terbaik</span> dan <span className="font-semibold text-white">pelajari perusahaan</span> agar lebih percaya diri saat melamar.
        </p>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-4 md:gap-8">
          <div className="flex flex-col items-center mb-6 sm:mb-4 md:mb-6">
            <span className="text-5xl sm:text-4xl md:text-5xl text-green-400">
              <i className="fas fa-file-alt"></i>
            </span>
            <p className="text-sm sm:text-xs md:text-sm text-gray-400 mt-3">Siapkan CV</p>
          </div>
          <div className="flex flex-col items-center mb-6 sm:mb-4 md:mb-6">
            <span className="text-5xl sm:text-4xl md:text-5xl text-yellow-400">
              <i className="fas fa-search"></i>
            </span>
            <p className="text-sm sm:text-xs md:text-sm text-gray-400 mt-3">Riset Perusahaan</p>
          </div>
          <div className="flex flex-col items-center mb-6 sm:mb-4 md:mb-6">
            <span className="text-5xl sm:text-4xl md:text-5xl text-blue-400">
              <i className="fas fa-handshake"></i>
            </span>
            <p className="text-sm sm:text-xs md:text-sm text-gray-400 mt-3">Siap Wawancara</p>
          </div>
        </div>
      </div>


      <h1 className="text-3xl font-semibold text-white text-center mb-6">Lowongan Pekerjaan</h1>
      
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center space-x-4  mb-6">
        <button
          onClick={() => handleTabChange('all')}
          className={`px-6 py-2 rounded-md mb-2 sm:mb-0 ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
        >
          Semua
        </button>
        <button
          onClick={() => handleTabChange('bumn')}
          className={`px-6 py-2 rounded-md mb-2 sm:mb-0 ${activeTab === 'bumn' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
        >
          BUMN
        </button>
        <button
          onClick={() => handleTabChange('swasta')}
          className={`px-6 py-2 rounded-md mb-2 sm:mb-0 ${activeTab === 'swasta' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
        >
          Swasta
        </button>
        <button
          onClick={() => handleTabChange('fresh')}
          className={`px-6 py-2 rounded-md mb-2 sm:mb-0 ${activeTab === 'fresh' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
        >
          Fresh Graduate
        </button>
      </div>

      {/* Job List */}
      <JobList activeTab={activeTab} onTabChange={handleTabChange} />




      {/* Another Job Component */}
      <div className="mt-24">
        <AnotherJob />
      </div>

      <div className="my-16 text-center text-white p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">🚀 Dapatkan Pekerjaan Impianmu Sekarang!</h2>
        <p className="text-lg text-gray-300 mb-6">
          Jangan menunggu lagi! Cari dan lamar pekerjaan yang sesuai dengan minat dan keahlianmu. Ikuti tips kami dan mulai kariermu dengan langkah yang tepat!
        </p>
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl text-green-400">
              <i className="fas fa-briefcase"></i>
            </span>
            <p className="text-sm text-gray-400 mt-2">Pekerjaan Menarik</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl text-yellow-400">
              <i className="fas fa-cogs"></i>
            </span>
            <p className="text-sm text-gray-400 mt-2">Keahlian Sesuai</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl text-blue-400">
              <i className="fas fa-users"></i>
            </span>
            <p className="text-sm text-gray-400 mt-2">Komunitas Profesional</p>
          </div>
        </div>

      </div>

      <div className="adsense-container my-6">
        <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-6260877984972289"
            data-ad-slot="1234567890"
            data-ad-format="auto"></ins>
      </div>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>


    </div>
  );
};

export default HomePage;
