import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import JobList from './components/JobList';
import TabNavigation from './components/TabNavigation';
import JobPortal from './components/JobPortal';
import AnotherJob from './components/AnotherJob';

type TabType = 'all' | 'bumn' | 'swasta' | 'fresh';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [imageTransform, setImageTransform] = useState<string>(''); // Menyimpan transformasi gambar
  const [currentText, setCurrentText] = useState<string>('Peluang Karir Terbaik'); // State untuk teks dinamis

  const textOptions = [
    'Peluang Karir Terbaik',
    'Pekerjaan Impian',
    'Karir Fleksibel',
    'Pekerjaan Bagus',
    'Karir Sesuai Passion'
  ];

  // Fungsi untuk menangani scroll dan menampilkan tombol
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  // Fungsi untuk menangani pergerakan kursor dan menambahkan efek 3D pada gambar
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (clientX - centerX) / width;
    const deltaY = (clientY - centerY) / height;

    // Meningkatkan efek pergerakan 3D dengan memperbesar nilai rotasi
    const rotateX = deltaY * 30; // Sensitivitas pada sumbu X (perbesar nilai)
    const rotateY = deltaX * 30; // Sensitivitas pada sumbu Y (perbesar nilai)

    setImageTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`); // Menyimpan transformasi
  };

  // Fungsi untuk mengganti teks setiap beberapa detik
  useEffect(() => {
    let textIndex = 0;
    const interval = setInterval(() => {
      setCurrentText(textOptions[textIndex]);  // Mengubah teks
      textIndex = (textIndex + 1) % textOptions.length; // Mengubah teks dalam array
    }, 3000); // Berganti setiap 3 detik

    // Membersihkan interval ketika komponen dibuang
    return () => clearInterval(interval);
  }, []);

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

  // Fungsi untuk memecah teks dan memberikan style dengan format yang baru
  const highlightText = (text: string) => {
    const parts = text.split(':');  // Memisahkan "Temukan" dan teks yang berikutnya
    return (
      <div>
        <span className="text-blue-500 font-bold">{parts[0]}:</span>
        <span className="text-green-400 font-semibold">"{parts[1] || ''}"</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-0">
      {/* Navbar */}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="max-w-full mx-auto bg-gray-800 rounded-lg shadow-xl p-2">
        {/* Hero Section */}
        <div className="border-b border-slate-500 mt-8 text-white p-6 shadow-md mb-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Gambar di sebelah atas untuk mobile, di sebelah kanan untuk desktop */}
            <div
              className="flex-1 order-2 lg:order-1"
              onMouseMove={handleMouseMove} // Menambahkan event handler untuk pergerakan mouse
            >
              <img
                src="/public/assets/hero.svg"  // Memindahkan gambar ke folder yang sesuai
                alt="Peluang Karir"
                className="w-full h-auto rounded-lg transition-transform duration-150 ease-out"
                style={{
                  transform: imageTransform, // Menggunakan transformasi berdasarkan pergerakan kursor
                }}
              />
            </div>

            {/* Teks di sebelah bawah untuk mobile, di sebelah kiri untuk desktop */}
            <div className="flex-1 text-center mt-8 sm:mt-10 lg:mt-2 lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-semibold">
                {highlightText(`Temukan: ${currentText}`)} {/* Menampilkan teks dinamis dengan highlight */}
              </h2>
              <p className="text-gray-200 mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
                Cari pekerjaan terbaru di berbagai sektor, termasuk BUMN, perusahaan Swasta, dan peluang untuk Fresh Graduate. Temukan karir impian Anda di sini!
              </p>
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
