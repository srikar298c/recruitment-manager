import React from 'react';

const FilterComponent = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
       <label>
        <input type="radio" value="option1"  />
        Enrollers
      </label>
      
      <label>
        <input type="radio" value="option2"/> 
        Registars
      </label>
      </div>
      <div className="flex flex-col space-y-4">

        <div>
            <div className="flex  justify-around">
                     <label htmlFor="assigned-to" className="block">Assigned to</label>
          <select id="assigned-to" className="border border-gray-300 rounded px-2 py-1 w-36">
            <option>Select</option>
            {/* Add options here */}
          </select>
          </div>
         
        </div>

          <div>
            <div className="flex justify-around">
                 <label htmlFor="assigned-from" className="block">Assigned from</label>
            <select id="assigned-from" className="border border-gray-300 rounded px-2 py-1 w-32">
              <option>Select</option>
              {/* Add options here */}
            </select>
            </div>
          </div>
     
      <div >
        <div className="flex justify-around">
          <label htmlFor="status" className="block">Choose Status</label>
          <select id="status" className="border border-gray-300 rounded px-2 py-1 w-32">
            <option>Select</option>
            {/* Add options here */}
          </select>
        </div>
        {/* ... */}
      </div>
       <div >
        <div className="flex justify-around">
          <label htmlFor="status" className="block">Department</label>
          <select id="status" className="border border-gray-300 rounded px-2 py-1 w-32">
            <option>Select</option>
            {/* Add options here */}
          </select>
        </div>
        {/* ... */}
      </div>
       <div >
        <div className="flex justify-around">
          <label htmlFor="status" className="block">Exam Status</label>
          <select id="status" className="border border-gray-300 rounded px-2 py-1 w-32">
            <option>Select</option>
            {/* Add options here */}
          </select>
        </div>
        {/* ... */}
      </div>
       <div >
        <div className="flex justify-around">
          <label htmlFor="status" className="block">Client</label>
          <select id="status" className="border border-gray-300 rounded px-2 py-1 w-32">
            <option>Select</option>
            {/* Add options here */}
          </select>
        </div>
        {/* ... */}
      </div>
      <div className="flex items-center space-x-4">
        <div>Experience</div>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <input type="radio" id="yes" name="experience" className="mr-2" />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="no" name="experience" className="mr-2" />
            <label htmlFor="no">No</label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="none" name="experience" className="mr-2" />
            <label htmlFor="none">None</label>
          </div>
        </div>
      </div>
       <div >
        <div className="flex justify-around">
          <label htmlFor="status" className="block">Country</label>
          <select id="status" className="border border-gray-300 rounded px-2 py-1 w-32">
            <option>Select</option>
            {/* Add options here */}
          </select>
        </div>
        {/* ... */}
      </div>
       <div >
        <div className="flex justify-around">
          <label htmlFor="status" className="block">Origin Of Country</label>
          <select id="status" className="border border-gray-300 rounded px-2 py-1 w-32">
            <option>Select</option>
            {/* Add options here */}
          </select>
        </div>
        {/* ... */}
      </div>
       <div >
        <div className="flex justify-around">
          <label htmlFor="status" className="block">Intrested Country</label>
          <select id="status" className="border border-gray-300 rounded px-2 py-1 w-32">
            <option>Select</option>
            {/* Add options here */}
          </select>
        </div>
        {/* ... */}
      </div>
      <button className="bg-green-500 text-white px-4 py-2 rounded">Apply</button>
    </div>
     </div>
  );
};

export default FilterComponent;