import React, { useState } from 'react';
import QuickActions from './QuickActions';

interface DocumentsFormData {
  document1: File | null;
  document2: File | null;
  document3: File | null;
  document4: File | null;
  document5: File | null;
  document6: File | null;
  document7: File | null;
}

const DocumentsForm: React.FC = () => {
  const [formData, setFormData] = useState<DocumentsFormData>({
    document1: null,
    document2: null,
    document3: null,
    document4: null,
    document5: null,
    document6: null,
    document7: null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, documentName: keyof DocumentsFormData) => {
    setFormData({ ...formData, [documentName]: e.target.files?.[0] || null });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex">
      <div className="flex-1 bg-gray-100 p-6">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label htmlFor="document1" className="block font-medium mb-2">
              Document 1
            </label>
            <input
              type="file"
              id="document1"
              name="document1"
              onChange={(e) => handleFileChange(e, 'document1')}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
          {/* Repeat for other documents */}
          <div className="mb-4">
            <label htmlFor="document2" className="block font-medium mb-2">
              Document 2
            </label>
            <input
              type="file"
              id="document2"
              name="document2"
              onChange={(e) => handleFileChange(e, 'document2')}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
             <div className="mb-4">
            <label htmlFor="document3" className="block font-medium mb-2">
              Document 3
            </label>
            <input
              type="file"
              id="document3"
              name="document3"
              onChange={(e) => handleFileChange(e, 'document1')}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
          {/* Repeat for other documents */}
          <div className="mb-4">
            <label htmlFor="document4" className="block font-medium mb-2">
              Document 4
            </label>
            <input
              type="file"
              id="document4"
              name="document4"
              onChange={(e) => handleFileChange(e, 'document4')}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
             <div className="mb-4">
            <label htmlFor="document5" className="block font-medium mb-2">
              Document 5
            </label>
            <input
              type="file"
              id="document5"
              name="document5"
              onChange={(e) => handleFileChange(e, 'document5')}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
          {/* Repeat for other documents */}
          <div className="mb-4">
            <label htmlFor="document6" className="block font-medium mb-2">
              Document 6
            </label>
            <input
              type="file"
              id="document6"
              name="document6"
              onChange={(e) => handleFileChange(e, 'document6')}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
             <div className="mb-4">
            <label htmlFor="document7" className="block font-medium mb-2">
              Document 7
            </label>
            <input
              type="file"
              id="document7"
              name="document7"
              onChange={(e) => handleFileChange(e, 'document7')}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
          {/* Repeat for other documents */}
        
          <button
            type="submit"
            className="bg-purple-600 text-white font-medium py-2 px-4 rounded mt-4"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-1/3">
       <QuickActions/>
      </div>
    </div>
  );
};

export default DocumentsForm;