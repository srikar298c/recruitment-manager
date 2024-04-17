import React, { useState } from 'react';
import QuickActions from './QuickActions';

interface InterestsFormData {
  country: string;
  bestTimeToCall: string;
  interest1: string;
  interest2: string;
  interest3: string;
  interest4: string;
}

const InterestsForm: React.FC = () => {
  const [formData, setFormData] = useState<InterestsFormData>({
    country: '',
    bestTimeToCall: '',
    interest1: '',
    interest2: '',
    interest3: '',
    interest4: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            <label htmlFor="country" className="block font-medium mb-2">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
              placeholder="Enter your country"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bestTimeToCall" className="block font-medium mb-2">
              Best Time to Call
            </label>
            <input
              type="text"
              id="bestTimeToCall"
              name="bestTimeToCall"
              value={formData.bestTimeToCall}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
              placeholder="Enter the best time to call"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="interest1" className="block font-medium mb-2">
              Interest 1
            </label>
            <input
              type="text"
              id="interest1"
              name="interest1"
              value={formData.interest1}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
              placeholder="Enter your first interest"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="interest2" className="block font-medium mb-2">
              Interest 2
            </label>
            <input
              type="text"
              id="interest2"
              name="interest2"
              value={formData.interest2}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
              placeholder="Enter your second interest"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="interest3" className="block font-medium mb-2">
              Interest 3
            </label>
            <input
              type="text"
              id="interest3"
              name="interest3"
              value={formData.interest3}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
              placeholder="Enter your third interest"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="interest4" className="block font-medium mb-2">
              Interest 4
            </label>
            <input
              type="text"
              id="interest4"
              name="interest4"
              value={formData.interest4}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
              placeholder="Enter your fourth interest"
            />
          </div>
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
  )
};

export default InterestsForm;