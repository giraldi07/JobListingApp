// src/pages/JobPortal.tsx

import React from 'react';
import { jobPortals } from '../data/JobPortals';  // Import the job portals data

const JobPortal: React.FC = () => {
  return (
    <div className="p-8 rounded-2xl mt-8 max-w-screen-lg mx-auto">
      <h2 className="text-4xl font-bold text-white text-center mb-8">Web Loker: INDONESIA</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {jobPortals.map((portal, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-6 rounded-xl bg-slate-900 hover:bg-slate-800 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
          >
            <a
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center"
            >
              <img
                src={portal.logoUrl}  // Ensure the logoUrl exists in your jobPortals data
                alt={portal.name}
                className="h-90 w-auto object-contain"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPortal;
