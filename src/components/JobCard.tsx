import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Importing relevant icons

interface Job {
  "Company Name": string;
  "Description": string;
  "Job URL": string;
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-slate-900 border border-gray-700 rounded-lg p-6 mb-2 hover:shadow-lg transition-shadow duration-300 ease-in-out">
      {/* Company Name Section */}
      <div className="flex items-center space-x-3 mb-2">
   
        <h3 className="sm:text-sm md:text-md lg:text-xl font-semibold text-gray-100">{job["Company Name"]}</h3>
      </div>

      {/* Description Section */}
      <div className="flex items-center space-x-3 mb-4">
      
        <p className="text-gray-400 text-sm line-clamp-2">{job["Description"]}</p>
      </div>

      {/* Apply Link Section */}
      <a
        href={job["Job URL"]}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-blue-400 hover:text-blue-500 text-sm font-medium"
      >
        <FaExternalLinkAlt className="mr-2 text-lg" /> {/* Apply link icon */}
        Apply Here
      </a>
    </div>
  );
};

export default JobCard;
