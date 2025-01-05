import React, { useState } from 'react';
import { FaGithub, FaRegFileAlt, FaUsers, FaGlobeAmericas, FaHeart } from 'react-icons/fa';

const About: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [scanSuccess, setScanSuccess] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
    setScanSuccess(false); // Reset scan success state when modal is opened
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Function to simulate QR code scan success
  const handleQrScan = () => {
    setScanSuccess(true);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="JobFinder helps you find the latest job vacancies, both local and international. Find job opportunities quickly and accurately!" />
        <meta name="keywords" content="JobFinder, job search, lowongan pekerjaan, remote jobs, international jobs" />
        <meta name="author" content="Giraldi Prama Yudistira" />
        <title>About JobFinder - Find Your Perfect Job</title>
        <meta property="og:title" content="About JobFinder - Find Your Perfect Job" />
        <meta property="og:description" content="JobFinder helps you find the latest job vacancies, both local and international. Find job opportunities quickly and accurately!" />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <meta name="robots" content="index, follow" />
      </head>

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
            <a
              href="https://github.com/giraldi07/JobListingApp/issues"
              className="text-blue-400 hover:underline flex items-center"
              aria-label="Report issues on GitHub"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
            {' '}untuk melaporkan ke kami. Kami siap membantu!
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
              <button
                className="text-blue-400 hover:underline flex items-center justify-center mt-10 cursor-pointer"
                onClick={openModal}
                aria-label="Support developer"
              >
                <FaHeart className="mr-2 text-red-500" /> Support Saya
              </button>
            </p>
          </div>
        </section>

        {/* Modal for Trakteer */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-slate-900 bg-opacity-50">
            <div className="bg-slate-900 p-6 sm:p-8 md:p-10 rounded-lg shadow-xl w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-200 mb-4">Terima Kasih atas Dukungan Anda!</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Jika kamu ingin mendukung pengembangan lebih lanjut, kamu bisa menggunakan QR code di bawah ini untuk melakukan pembayaran:
                </p>
                {/* QR Code Image */}
                <img src="/src/assets/qr.jpg" alt="QR Code for Payment" className="w-48 sm:w-56 md:w-64 mx-auto mb-6" />
                <p className="text-lg text-gray-300 mb-6">Scan QR code untuk mendukung kami.</p>

                {/* QR Scan Simulation Button */}
                <button
                  className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 mb-4"
                  onClick={handleQrScan}
                >
                  Saya Sudah Scan!
                </button>

                {/* Success Notification */}
                {scanSuccess && (
                  <p className="text-lg text-green-600 font-semibold">Pembayaran berhasil! Terima kasih atas dukungannya!</p>
                )}

                <button
                  className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 mt-4"
                  onClick={closeModal}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default About;
