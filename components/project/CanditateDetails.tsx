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
    <div className=" mx-auto">
      <div className="flex justify-between">  <h2 className="text-xl font-bold mb-4">Name of the Candidate</h2>
        <p className="mb-6">created by Admin 1 at 00:00 hrs</p></div>
      

        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur. Maecenas dignissim a tortor lorem mattis. Aliquet quis malesuada neque nunc ac sem
          facilisis ut. Faucibus nullam commodo hendrerit facilisi pretium gravida massa luctus in.
        </p>
      <nav className="flex justify-center mb-6">
        
        <button
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${
            currentSection === 'demographics'
              ? 'bg-teal-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setCurrentSection('demographics')}
        >
          Demographics
        </button>
        <button
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${
            currentSection === 'academics'
              ? 'bg-teal-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setCurrentSection('academics')}
        >
          Academics
        </button>
        <button
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${
            currentSection === 'interests'
              ? 'bg-teal-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setCurrentSection('interests')}
        >
          Interests
        </button>
        <button
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${
            currentSection === 'documents'
              ? 'bg-teal-600 text-white'
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