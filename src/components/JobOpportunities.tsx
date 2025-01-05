import { useEffect, useState } from 'react';
import axios from 'axios';

const JobOpportunities = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const options = {
        method: 'GET',
        url: 'https://jobs-api19.p.rapidapi.com/jobs',
        params: { limit: '10' },
        headers: {
          'x-rapidapi-key': '35afcfca42msh75871a366dfb4c8p144832jsn3a62da9a75fb',
          'x-rapidapi-host': 'jobs-api19.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data); // Ensure data is received correctly
        setJobs(response.data || []);
      } catch (err: any) {
        if (err.response?.status === 429) {
          setError('Terlalu banyak permintaan. Coba lagi nanti.');
          setTimeout(fetchJobs, 10000); // Retry after 10 seconds
        } else {
          setError('Gagal mengambil data pekerjaan. Silakan coba lagi.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="bg-gray-900 p-8 my-16 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center justify-center space-x-2">
        <i className="fas fa-briefcase text-yellow-400"></i>
        <span>Lowongan Lainnya</span>
      </h3>

      {loading ? (
        <p className="text-gray-300 text-center">Sedang memuat data...</p>
      ) : error ? (
        <p className="text-red-400 text-center">{error}</p>
      ) : jobs.length === 0 ? (
        <p className="text-gray-300 text-center">Tidak ada data pekerjaan yang tersedia.</p>
      ) : (
        <ul className="space-y-4">
          {jobs.map((job) => (
            <li
              key={job.apply_link} // Using the apply_link as a unique key
              className="flex items-center space-x-4 bg-gray-800 p-4 rounded-md hover:bg-gray-700"
            >
              <span className="text-blue-400 text-3xl">
                <i className="fas fa-building"></i>
              </span>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  {job.company || 'Perusahaan Tidak Diketahui'}
                </h4>
                <p className="text-sm text-gray-400">
                  Posisi: {job.job_title || 'Posisi Tidak Diketahui'} |{' '}
                  Lokasi: {job.location || 'Lokasi Tidak Diketahui'}
                </p>
                <p className="text-sm text-green-400">
                  Gaji Rata-Rata: {job.salary || 'Gaji Tidak Diketahui'}
                </p>
                <a href={job.apply_link} target="_blank" className="text-blue-500 underline">
                  Lihat Lowongan
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobOpportunities;
