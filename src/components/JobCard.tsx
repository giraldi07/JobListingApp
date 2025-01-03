import React from 'react';

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
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <h3 className="sm:text-sm md: text-md lg:text-xl font-semibold text-gray-100 mb-2">{job["Company Name"]}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{job["Description"]}</p>
      <a
        href={job["Job URL"]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-500 text-sm font-medium"
      >
        Apply Here
      </a>
    </div>
  );
};

export default JobCard;
