import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';

type TabType = 'all' | 'bumn' | 'swasta' | 'fresh';

interface Job {
  "Company Name": string;
  "Description": string;
  "Job URL": string;
}

interface JobListProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const JobList: React.FC<JobListProps> = ({ activeTab }) => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const jobsPerPage = 24;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let url = 'https://api-job-amber.vercel.app/api/jobs';

        if (activeTab === 'bumn') {
          url = 'https://api-job-amber.vercel.app/api/jobs/bumn';
        } else if (activeTab === 'swasta') {
          url = 'https://api-job-amber.vercel.app/api/jobs/swasta';
        } else if (activeTab === 'fresh') {
          url = 'https://api-job-amber.vercel.app/api/jobs/fresh-graduate';
        }

        const response = await fetch(url);
        const data = await response.json();
        setFilteredJobs(data);
      } catch (err) {
        setError('Gagal mengambil data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 2 && i <= currentPage + 2)
    ) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="bg-slate-900 p-6 rounded-lg shadow-lg mt-6 max-w-screen-xl mx-auto">
      {/* Loading and Error States */}
      {loading ? (
        <div className="text-center text-gray-400">Memuat...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : filteredJobs.length === 0 ? (
        <div className="text-center text-gray-400">Tidak ada lowongan ditemukan.</div>
      ) : (
        <>
          {/* Job Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {currentJobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm text-white bg-blue-600 rounded-md disabled:bg-gray-300"
              >
                Prev
              </button>
              {pageNumbers.map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-md ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm text-white bg-blue-600 rounded-md disabled:bg-gray-300"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default JobList;
