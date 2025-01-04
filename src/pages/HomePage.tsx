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
    </div>
  );
};

export default HomePage;
