import React from 'react';

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
  return (
    <div className="mb-4 flex justify-center space-x-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 rounded-md text-sm ${
            activeTab === tab.id
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-gray-300 hover:bg-blue-600 hover:text-white'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
