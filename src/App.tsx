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

        // Hero Section
        <div className="border-b border-slate-500 mt-8 text-white p-6 shadow-md mb-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Teks di sebelah kiri */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                Temukan Peluang Karir Terbaik
              </h2>
              <p className="text-gray-200 mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
                Temukan pekerjaan terbaru di berbagai bidang seperti BUMN, Swasta, dan Fresh Graduate.
              </p>
            </div>

            {/* Gambar di sebelah kanan */}
            <div className="flex-1">
              <img
                src="/public/hero.png"  // Ganti dengan URL gambar yang diinginkan
                alt="Peluang Karir"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
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
