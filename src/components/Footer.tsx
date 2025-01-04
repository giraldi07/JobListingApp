import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-slate-800 border-t bg-slate-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p>
          &copy; 2025{' '}
          <a
            href="https://github.com/giraldi07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 underline"
          >
            RaldPra
          </a>
          . All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
