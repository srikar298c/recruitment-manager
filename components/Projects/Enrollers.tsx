import React from 'react';

const FilterComponent = () => {
  return (
        <div className=" mx-auto">
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Select Type:</h2>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="option1"
              name="type"
              className="form-radio h-5 w-5 text-indigo-600"
            />
            <span className="ml-2">Enrollers</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="option2"
              name="type"
              className="form-radio h-5 w-5 text-indigo-600"
            />
            <span className="ml-2">Registars</span>
          </label>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Filters:</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="assigned-to" className="block font-medium mb-1">
              Assigned To
            </label>
            <select
              id="assigned-to"
              className="form-select w-full border-gray-300 rounded-md shadow-sm"
            >
              <option>Select</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label htmlFor="assigned-from" className="block font-medium mb-1">
              Assigned From
            </label>
            <select
              id="assigned-from"
              className="form-select w-full border-gray-300 rounded-md shadow-sm"
            >
              <option>Select</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label htmlFor="status" className="block font-medium mb-1">
              Choose Status
            </label>
            <select
              id="status"
              className="form-select w-full border-gray-300 rounded-md shadow-sm"
            >
              <option>Select</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label htmlFor="department" className="block font-medium mb-1">
              Department
            </label>
            <select
              id="department"
              className="form-select w-full border-gray-300 rounded-md shadow-sm"
            >
              <option>Select</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label htmlFor="exam-status" className="block font-medium mb-1">
              Exam Status
            </label>
            <select
              id="exam-status"
              className="form-select w-full border-gray-300 rounded-md shadow-sm"
            >
              <option>Select</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label htmlFor="client" className="block font-medium mb-1">
              Client
            </label>
            <select
              id="client"
              className="form-select w-full border-gray-300 rounded-md shadow-sm"
            >
              <option>Select</option>
              {/* Add options here */}
            </select>
          </div>

          <div className="col-span-2">
            <label className="block font-medium mb-1">Experience</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  id="yes"
                  name="experience"
                  value="yes"
                  className="form-radio h-5 w-5 text-indigo-600"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  id="no"
                  name="experience"
                  value="no"
                  className="form-radio h-5 w-5 text-indigo-600"
                />
                <span className="ml-2">No</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  id="none"
                  name="experience"
                  value="none"
                  className="form-radio h-5 w-5 text-indigo-600"
                />
                <span className="ml-2">None</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="country" className="block font-medium mb-1">
              Country
            </label>
            <select
              id="country"
              className="form-select w-full border-gray-300 rounded-md shadow-sm"
            >
              <option>Select</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label htmlFor="origin-country" className="block font-medium mb-1">
              Origin of Country
            </label>
            <select
              id="origin-country"
              className="form-select w-full border-gray-300 rounded-md shadow-sm"
            >
              <option>Select</option>
              {/* Add options here */}
            </select>
          </div>

          <div>
            <label htmlFor="interested-country" className="block font-medium mb-1">
              Interested Country
            </label>
            <select
              id="interested-country"
              className="form-select w-full border-gray-300 rounded-md shadow-sm"
            >
              <option>Select</option>
              {/* Add options here */}
            </select>
          </div>
        </div>
      </div>

      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
        Apply
      </button>
    </div>
    </div>
  );
};

export default FilterComponent;