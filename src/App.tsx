import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';  // Mengimpor ikon panah atas
import JobList from './components/JobList';
import TabNavigation from './components/TabNavigation';
import JobPortal from './components/JobPortal';
import AnotherJob from './components/AnotherJob';

type TabType = 'all' | 'bumn' | 'swasta' | 'fresh';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Fungsi untuk menangani scroll dan menampilkan tombol
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  // Menambahkan event listener untuk scroll ketika komponen pertama kali di-render
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Bersihkan event listener ketika komponen dibuang
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fungsi untuk scroll kembali ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-0">
      {/* Navbar */}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="max-w-full mx-auto bg-gray-800 rounded-lg shadow-xl p-2">
        {/* <h1 className="text-4xl font-semibold text-center text-white mb-6">Lowongan Kerja Terbaru</h1> */}

        {/* Hero Section */}
        <div className="border-b border-slate-500 text-white p-6 shadow-md mb-6">
          <h2 className="text-center text-2xl mt-20 sm:mt-30 md:mt-20 lg:mt-20 font-semibold">Temukan Peluang Karir Terbaik</h2>
          <p className="text-center text-gray-200 mt-2">
            Temukan pekerjaan terbaru di berbagai bidang seperti BUMN, Swasta, dan Fresh Graduate.
          </p>
        </div>

        {/* Job List */}
        <JobList activeTab={activeTab} />

        <div>
          <AnotherJob />
        </div>

        {/* Job Portal Lists */}
        <JobPortal />

        {/* Footer Section */}
        <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md mt-6">
          <p className="text-center text-gray-200">
            Data Update secara berkala berdasarkan web{' '}
            <a href="https://www.disnakerja.com/" className="underline hover:text-gray-300">
              Disnakerja.com
            </a>
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <FaArrowUp size={24} /> {/* Ikon panah atas */}
        </button>
      )}
    </div>
  );
};

export default App;
