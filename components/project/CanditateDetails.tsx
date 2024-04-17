"use client"
import React, { useState } from 'react';
import DemographicsForm from './DemographicsForm';
import AcademicsForm from './AcademicsForm';
import InterestsForm from './InterestsForm';
import DocumentsForm from './DocumentsForm';

type Section = 'demographics' | 'academics' | 'interests' | 'documents';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>('demographics');

  const renderSection = () => {
    switch (currentSection) {
      case 'demographics':
        return <DemographicsForm />;
      case 'academics':
        return <AcademicsForm />;
      case 'interests':
        return <InterestsForm />;
      case 'documents':
        return <DocumentsForm />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <nav className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${
            currentSection === 'demographics'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setCurrentSection('demographics')}
        >
          Demographics
        </button>
        <button
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${
            currentSection === 'academics'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setCurrentSection('academics')}
        >
          Academics
        </button>
        <button
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${
            currentSection === 'interests'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setCurrentSection('interests')}
        >
          Interests
        </button>
        <button
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${
            currentSection === 'documents'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setCurrentSection('documents')}
        >
          Documents
        </button>
      </nav>
      <div className="p-6 bg-white rounded-md shadow-md">{renderSection()}</div>
    </div>
  );
};

export default App;