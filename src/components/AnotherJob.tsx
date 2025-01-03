import React, { useState, useEffect } from 'react';
import { FaBuilding, FaMapMarkerAlt, FaRegClock, FaUsers, FaDollarSign, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

interface Job {
  job_age: string;
  company: string;
  work_arrangement: string;
  job_title: string;
  job_type: string;
  job_department: string;
  job_location: string;
  job_url: string;
  base_salary: string;
  job_level: string;
  first_seen: string;
  last_seen: string;
  job_apply_end_date: string;
  is_active: boolean;
  job_board: string;
  company_url: string;
  job_board_url: string;
}

const AnotherJob: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const jobsPerPage = 8; // Membatasi 20 data per halaman

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Mengambil data JSON dari folder public
        const response = await fetch('/AnotherJob.json');
        
        // Cek jika respons berhasil
        if (!response.ok) {
          throw new Error('Gagal mengambil data');
        }

        const data = await response.json();

        // Mengonversi data is_active dari string "True"/"False" menjadi boolean
        const formattedJobs = data.map((job: any) => ({
          ...job,
          is_active: job.is_active === 'True', // Mengubah "True" menjadi true dan "False" menjadi false
        }));

        setJobs(formattedJobs);
      } catch (err) {
        console.error(err);  // Log error ke konsol untuk debugging
        setError('Gagal mengambil data lowongan');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Membatasi jumlah data per halaman
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  // Fungsi untuk menangani pergantian halaman
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  // Menghitung halaman yang akan ditampilkan di pagination
  const pageNumbers = () => {
    const totalPagesToShow = 4; // Menampilkan hanya 4 halaman
    const startPage = Math.max(currentPage - 2, 1); // Menampilkan 2 halaman sebelumnya
    const endPage = Math.min(startPage + totalPagesToShow - 1, totalPages); // Menampilkan 2 halaman setelahnya jika ada

    // Membatasi jumlah halaman agar tidak lebih dari total halaman yang ada
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-3xl font-semibold text-white text-center mb-6">Lowongan Lainnya</h2>

      {loading ? (
        <div className="text-center text-gray-400">Memuat...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : currentJobs.length === 0 ? (
        <div className="text-center text-gray-400">Tidak ada lowongan ditemukan.</div>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentJobs.map((job, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-white mb-2">{job.job_title}</h3>
                
                <div className="flex flex-col space-y-2 text-gray-400">
                  <div className="flex items-center">
                    <FaBuilding className="mr-2 text-blue-400" />
                    <a href={job.company_url} target="_blank" rel="noopener noreferrer">{job.company}</a>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-red-400" />
                    {job.job_location}
                  </div>
                  <div className="flex items-center">
                    <FaRegClock className="mr-2 text-yellow-400" />
                    {job.job_type} | {job.work_arrangement}
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="mr-2 text-green-400" />
                    {job.job_department}
                  </div>
                  <div className="flex items-center">
                    <FaDollarSign className="mr-2 text-green-400" />
                    {job.base_salary || "Not specified"}
                  </div>
                  <div className="flex items-center">
                    <FaGraduationCap className="mr-2 text-purple-400" />
                    {job.job_level}
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-orange-400" />
                    First Seen: {formatDate(job.first_seen)}
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-orange-400" />
                    Last Seen: {formatDate(job.last_seen)}
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-orange-400" />
                    Apply By: {formatDate(job.job_apply_end_date)}
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <a
                    href={job.job_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    Apply Now
                  </a>
                  {job.is_active ? (
                    <span className="text-green-500 font-medium">Active</span>
                  ) : (
                    <span className="text-red-500 font-medium">Inactive</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <nav className="flex items-center flex-wrap gap-2">
              {currentPage > 1 && (
                <button
                  onClick={() => paginate(1)}
                  className="px-3 py-1 text-xs sm:text-sm bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600"
                >
                  &lt;&lt; First
                </button>
              )}
              {currentPage > 1 && (
                <button
                  onClick={() => paginate(currentPage - 1)}
                  className="px-3 py-1 text-xs sm:text-sm bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600"
                >
                  &lt; Prev
                </button>
              )}
              {pageNumbers().map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-3 py-1 text-xs sm:text-sm rounded-lg ${currentPage === number ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'} hover:bg-gray-600`}
                >
                  {number}
                </button>
              ))}
              {currentPage < totalPages && (
                <button
                  onClick={() => paginate(currentPage + 1)}
                  className="px-3 py-1 text-xs sm:text-sm bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600"
                >
                  Next &gt;
                </button>
              )}
              {currentPage < totalPages && (
                <button
                  onClick={() => paginate(totalPages)}
                  className="px-3 py-1 text-xs sm:text-sm bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600"
                >
                  Last &gt;&gt;
                </button>
              )}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnotherJob;
