import { useEffect, useState } from "react";
import HeroPage from "../components/HeroPage";

const ITEMS_PER_PAGE = 15;

const LokalJobs = () => {
  const [jobsDicoding, setJobsDicoding] = useState<any[]>([]);
  const [jobsIndeed, setJobsIndeed] = useState<any[]>([]);
  const [jobsDealls, setJobsDealls] = useState<any[]>([]);
  const [activeSource, setActiveSource] = useState("dicoding");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const dicodingResponse = await fetch("https://jobs-api-indonesia.vercel.app/api/dicoding");
        const dicodingData = await dicodingResponse.json();
        setJobsDicoding(dicodingData);

        const indeedResponse = await fetch("https://jobs-api-indonesia.vercel.app/api/indeed");
        const indeedData = await indeedResponse.json();
        setJobsIndeed(indeedData);

        const deallsResponse = await fetch("https://jobs-api-indonesia.vercel.app/api/dealls");
        const deallsData = await deallsResponse.json();
        setJobsDealls(deallsData);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const paginateData = (data: any[], page: number) => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    return data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const renderJob = (job: any, source: string) => {
    let jobTitle = '';
    let jobCompany = '';
    let jobType = '';
    let jobLocation = '';
    let jobExperience = '';
    let jobLink = '';

    if (source === "dicoding") {
      jobTitle = job["CardJobs_title__zmEq1"];
      jobCompany = job["CardJobs_company__00G3O"];
      jobType = job["CardJobs_type__XgDVh"];
      jobLocation = job["CardJobs_location__4e0ln"];
      jobExperience = job["CardJobs_experienced__x4XRZ"];
      jobLink = job["CardJobs_card__1Q4zT href"];
    }

    if (source === "indeed") {
      jobTitle = job["jcs-JobTitle"];
      jobCompany = job["css-1h7lukg"];
      jobType = job["css-1restlb"];
      jobLocation = job["css-o11dc0"];
      jobExperience = job["css-18z4q2i 2"];
      jobLink = job["jcs-JobTitle href"];
    }

    if (source === "dealls") {
      jobTitle = job["pr-5"];
      jobCompany = job["flex"];
      jobType = job["flex 2"];
      jobLocation = job["flex 3"];
      jobExperience = job["flex 4"];
      jobLink = job["rounded-lg href"];
    }

    return (
      <div
        key={jobLink}
        className="bg-slate-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300"
      >
        <a href={jobLink} target="_blank" rel="noopener noreferrer">
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">{jobTitle}</h3>
            <p className="text-gray-300">{jobCompany}</p>
            <p className="text-sm text-gray-400">{jobType} - {jobLocation}</p>
            <p className="text-sm text-gray-400">Pengalaman: {jobExperience}</p>
          </div>
        </a>
      </div>
    );
  };

  const handleSourceChange = (source: string) => {
    setActiveSource(source);
    setCurrentPage(1);
  };

  const handlePaginationChange = (direction: string) => {
    setCurrentPage((prev) => (direction === "next" ? prev + 1 : Math.max(prev - 1, 1)));
  };

  const filterJobs = (jobs: any[]) => {
    if (!searchQuery) return jobs;
    return jobs.filter((job) =>
      job["CardJobs_title__zmEq1"]?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job["jcs-JobTitle"]?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job["pr-5"]?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const activeJobs =
    activeSource === "dicoding"
      ? filterJobs(jobsDicoding)
      : activeSource === "indeed"
      ? filterJobs(jobsIndeed)
      : filterJobs(jobsDealls);

  useEffect(() => {
    // Dynamically add Google Ads script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.onload = () => {
      // Initialize Google Ads after the script is loaded
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };
    document.body.appendChild(script);
  }, []);


  return (
    <div className="mx-auto px-6 sm:px-12 lg:px-24 py-10 bg-slate-900 min-h-screen">
      <div className="mb-10 border-b border-slate-800">
        <HeroPage />
      </div>
      <h1 className="mt-24 text-4xl font-bold text-center text-white mb-10">Lokal Jobs</h1>

      {/* Google Ads Section */}
      <div className="mb-10 text-center">
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXX" // Replace with your AdSense client ID
          data-ad-slot="XXXXXXX" // Replace with your AdSense ad slot
          data-ad-format="auto">
        </ins>
      </div>

      {/* Search Section */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Jobs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 rounded-full bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Buttons Section */}
      <div className="flex justify-center space-x-2 mb-6">
        <button
          onClick={() => handleSourceChange("dicoding")}
          className={`px-4 py-2 rounded-full ${activeSource === "dicoding" ? "bg-blue-500" : "bg-slate-700"} text-white hover:bg-blue-400 transition`}
        >
          Dicoding
        </button>
        <button
          onClick={() => handleSourceChange("indeed")}
          className={`px-4 py-2 rounded-full ${activeSource === "indeed" ? "bg-blue-500" : "bg-slate-700"} text-white hover:bg-blue-400 transition`}
        >
          Indeed
        </button>
        <button
          onClick={() => handleSourceChange("dealls")}
          className={`px-4 py-2 rounded-full ${activeSource === "dealls" ? "bg-blue-500" : "bg-slate-700"} text-white hover:bg-blue-400 transition`}
        >
          Dealls
        </button>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center mt-8">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
        </div>
      ) : (
        <>
          {/* Jobs Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {paginateData(activeJobs, currentPage).map((job) => renderJob(job, activeSource))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => handlePaginationChange("prev")}
              className="px-6 py-3 bg-slate-700 text-white rounded-full hover:bg-slate-600 mr-4"
            >
              Prev
            </button>
            <button
              onClick={() => handlePaginationChange("next")}
              className="px-6 py-3 bg-slate-700 text-white rounded-full hover:bg-slate-600"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LokalJobs;
