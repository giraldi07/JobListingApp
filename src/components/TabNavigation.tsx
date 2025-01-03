import React, { useState } from 'react';

type TabType = 'all' | 'bumn' | 'swasta' | 'fresh';

interface Tab {
  id: TabType;
  label: string;
}

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs: Tab[] = [
  { id: 'all', label: 'Semua Lowongan' },
  { id: 'bumn', label: 'BUMN' },
  { id: 'swasta', label: 'Swasta' },
  { id: 'fresh', label: 'Fresh Graduate' },
];

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 shadow-md p-4 fixed w-full top-0 z-10">
      {/* Navbar Container */}
      <div className="flex items-center justify-between max-w-screen-md mx-auto px-4">
        {/* Logo */}
        <div className="text-white text-2xl px-4 font-semibold border-r border-gray-700">
          <h2>
             JobFinder
          </h2>
        </div>


        {/* Menu Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-4 py-2 text-lg font-medium rounded-lg transition-all duration-300 ease-in-out ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                  : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="text-white lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (When Hamburger is Open) */}
      <div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`w-full text-lg font-medium py-2 px-4 text-left ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default TabNavigation;
