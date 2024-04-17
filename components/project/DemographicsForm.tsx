import React from 'react';
import QuickActions from './QuickActions';

const CandidateDetails = () => {
  return (
    <div className="flex">
      <div className="w-3/4 p-4 border border-gray-300 rounded-lg mr-4">
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Personal Details</h3>
            <div className="flex">
              <div className="mr-4">
                <label className="block font-bold">First Name</label>
                <input type="text" value="Lorem ipsum" className="border border-gray-300 rounded-lg px-2 py-1" />
              </div>
              <div>
                <label className="block font-bold">Last Name</label>
                <input type="text" value="Lorem ipsum" className="border border-gray-300 rounded-lg px-2 py-1" />
              </div>
            </div>
            <div className="flex mt-2">
              <div className="mr-4">
                <label className="block font-bold">Date of Birth</label>
                <div className="flex">
                  <select className="border border-gray-300 rounded-l-lg px-2 py-1">
                    <option>Apr</option>
                    {/* Add more options */}
                  </select>
                  <input type="text" value="1996" className="border border-gray-300 rounded-r-lg px-2 py-1" />
                </div>
              </div>
              <div>
                <label className="block font-bold">Gender</label>
                <div className="flex">
                  <div className="flex items-center mr-4">
                    <input type="radio" name="gender" checked className="mr-2" />
                    <label>Female</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" name="gender" className="mr-2" />
                    <label>Male</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat similar structure for other sections */}
        </div>

        <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 focus:outline-none">Next</button>
      </div>

      <QuickActions/>
    </div>
  );
};

export default CandidateDetails;