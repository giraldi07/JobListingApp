import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaDollarSign, FaBriefcase, FaCalendarAlt } from "react-icons/fa"; // Importing icons
import HeroPageInter from "../components/HeroPageInter";
import JobOpportunities from "../components/JobOpportunities";

const ITEMS_PER_PAGE = 15;

const InterJobs = () => {
  const [jobsRemote, setJobsRemote] = useState<any[]>([]);
  const [jobsInt, setJobsInt] = useState<any[]>([]);
  const [jobsGlf, setJobsGlf] = useState<any[]>([]);
  const [jobsCareerjet, setJobsCareerjet] = useState<any[]>([]);
  const [activeSource, setActiveSource] = useState("remote");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        // Fetching data from remote jobs API
        const remoteResponse = await fetch("https://jobs-api-international.vercel.app/api/remote");
        const remoteData = await remoteResponse.json();
        setJobsRemote(remoteData);

        // Fetching data from int jobs API
        const intResponse = await fetch("https://jobs-api-international.vercel.app/api/int");
        const intData = await intResponse.json();
        setJobsInt(intData);

        // Fetching data from glf jobs API
        const glfResponse = await fetch("https://jobs-api-international.vercel.app/api/glf");
        const glfData = await glfResponse.json();
        setJobsGlf(glfData);

        // Fetching data from careerjet jobs API
        const careerjetResponse = await fetch("https://jobs-api-international.vercel.app/api/careerjet");
        const careerjetData = await careerjetResponse.json();
        setJobsCareerjet(careerjetData);

      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
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
    let jobLocation = '';
    let jobSalary = '';
    let jobLink = '';
    let jobPostedDate = '';

    if (source === "remote") {
      jobTitle = job["sc-1304b7p-6"];
      jobCompany = job["sc-1304b7p-19"];
      jobLocation = job["sc-1304b7p-15"];
      jobSalary = job["sc-1304b7p-14 3"];
      jobPostedDate = job["sc-1304b7p-18"];
      jobLink = job["sc-1304b7p-6 href"];
    }

    if (source === "int") {
      jobTitle = job["ps-3"];
      jobCompany = job["companyName"];
      jobLocation = job["location"];
      jobSalary = job["postedDate"];
      jobLink = job["mb-2 href"];
    }

    if (source === "glf") {
      jobTitle = job["elementor-heading-title"];
      jobCompany = job["elementor-icon-list-text"];
      jobLocation = job["elementor-icon-list-text 2"];
      jobSalary = job["elementor-post-info__terms-list-item"];
      jobLink = job["elementor-heading-title href"];
    }

    if (source === "careerjet") {
      jobTitle = job["job"];
      jobCompany = job["location"];
      jobSalary = job["salary"];
      jobLink = job["job href"];
    }

    // Only render the job if the title and company are not empty
    if (!jobTitle || !jobCompany) return null;

    return (
      <div
        key={jobLink}
        className="bg-slate-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300"
      >
        <a href={jobLink} target="_blank" rel="noopener noreferrer">
          <div className="p-4">
            <h3 className="text-md font-semibold text-white flex items-center">
              <FaBriefcase className="mr-2 text-blue-400" />
              {jobTitle}
            </h3>
            <p className="text-gray-300 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gray-500" />
              {jobCompany}
            </p>
            <p className="text-sm text-gray-400 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gray-500" />
              {jobLocation}
            </p>
            <p className="text-sm text-gray-400 flex items-center">
              <FaDollarSign className="mr-2 text-green-500" />
              {jobSalary}
            </p>
            <p className="text-sm text-gray-400 flex items-center">
              <FaCalendarAlt className="mr-2 text-yellow-500" />
              {jobPostedDate}
            </p>
          </div>
        </a>
      </div>
    );
  };

  const handleSourceChange = (source: string) => {
    setActiveSource(source);
    setCurrentPage(1); // Reset page to 1 whenever the source changes
  };

  const handlePaginationChange = (direction: string) => {
    setCurrentPage((prev) => (direction === "next" ? prev + 1 : Math.max(prev - 1, 1)));
  };

  const activeJobs =
    activeSource === "remote"
      ? jobsRemote
      : activeSource === "int"
      ? jobsInt
      : activeSource === "glf"
      ? jobsGlf
      : jobsCareerjet;

  return (
    <div className="mx-auto px-6 sm:px-12 lg:px-24 py-10 bg-slate-900 min-h-screen">
      <div className="mb-10 border-b border-slate-800">
        <HeroPageInter />
      </div>
      <h1 className="mt-24 text-3xl font-semibold text-white text-center mb-6">International Jobs</h1>

        {/* Buttons Section */}
        <div className="flex justify-center space-x-2 mb-6">
          <button
              onClick={() => handleSourceChange("remote")}
              className={`px-3 py-1.5 text-sm rounded-md ${activeSource === "remote" ? "bg-blue-500" : "bg-slate-700"} text-white hover:bg-blue-400 transition-all duration-300`}
          >
              Remote
          </button>
          <button
              onClick={() => handleSourceChange("int")}
              className={`px-3 py-1.5 text-sm rounded-md ${activeSource === "int" ? "bg-blue-500" : "bg-slate-700"} text-white hover:bg-blue-400 transition-all duration-300`}
          >
              IntJobs
          </button>
          <button
              onClick={() => handleSourceChange("glf")}
              className={`px-3 py-1.5 text-sm rounded-md ${activeSource === "glf" ? "bg-blue-500" : "bg-slate-700"} text-white hover:bg-blue-400 transition-all duration-300`}
          >
              GLF
          </button>
          <button
              onClick={() => handleSourceChange("careerjet")}
              className={`px-3 py-1.5 text-sm rounded-md ${activeSource === "careerjet" ? "bg-blue-500" : "bg-slate-700"} text-white hover:bg-blue-400 transition-all duration-300`}
          >
              Careerjet
          </button>
        </div>

        {/* Google Ads Block */}
        <div className="ads-container mb-6">
          <h2 className="text-xl font-semibold text-white">Find Your Ideal Job Today</h2>
          <p className="text-gray-300 mt-4">Explore various job opportunities across multiple platforms and industries. Whether you are looking for remote work or jobs abroad, we've got you covered!</p>
          {/* Add your Google Ads code here */}
          <div id="adsense-block" className="mt-4">
            {/* Replace with your Google AdSense script or ad code */}
          </div>
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

      <div className="bg-gray-900 p-8 my-16 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <JobOpportunities />
      </div>
    </div>
  );
};

export default InterJobs;
