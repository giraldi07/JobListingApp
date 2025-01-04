import React, { useState, useEffect } from 'react';
import { FaBuilding, FaMapMarkerAlt, FaRegClock, FaUsers, FaDollarSign, FaGraduationCap, FaCalendarAlt, FaSearch } from 'react-icons/fa';

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
  const [jobs, setJobs] = useState<Job[]>([]); // Correct type for jobs state
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query
  const jobsPerPage = 8;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/AnotherJob.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        
        // Check if the data format is correct before using it
        if (Array.isArray(data)) {
          const formattedJobs: Job[] = data.map((job: any) => ({
            ...job,
            is_active: job.is_active === 'True',
          }));
          setJobs(formattedJobs);
        } else {
          throw new Error('Data is not in expected format');
        }
      } catch (err) {
        console.error(err);
        setError('Failed to load job listings');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs based on the search query
  const filteredJobs = jobs.filter((job) => {
    return (
      job.job_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.job_location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.job_type.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const pageNumbers = () => {
    const totalPagesToShow = 4;
    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(startPage + totalPagesToShow - 1, totalPages);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="bg-slate-900 p-4 sm:p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-3xl font-semibold text-white text-center mb-6">Lowongan Lainnya</h2>

      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari lowongan..."
            className="w-full p-4 pl-12 pr-4 rounded-md bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

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
              <div key={index} className="bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
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
