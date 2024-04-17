import React, { useState } from 'react';
import QuickActions from './QuickActions';

const PersonalDetailsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: 'Female',
    height: '',
    weight: '',
    bmi: '',
    email: '',
    contactNumber: '',
    passportNumber: '',
    nationality: '',
    currentAddress: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className='flex '>
        
        <div className='flex-1 bg-gray-100 p-6 '>
             <div className="flex space-x-6">
          <div className="flex-1">
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
        <div className="grid grid-cols gap-4">
          <div>
            <label htmlFor="firstName" className="block font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="dateOfBirth" className="block font-medium mb-2">
              Date of Birth
            </label>
            <select
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            >
              <option value="">Select date</option>
              {/* Populate options for date of birth */}
            </select>
          </div>
          <div>
            <label htmlFor="gender" className="block font-medium mb-2">
              Gender
            </label>
            <div className="flex items-center">
              <label className="flex items-center mr-4">
                <input
                  type="radio"
                  id="gender"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Female
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="gender"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Male
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-4">Biometric Data</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="height" className="block font-medium mb-2">
              Height
            </label>
            <input
              type="text"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
          <div>
            <label htmlFor="weight" className="block font-medium mb-2">
              Weight
            </label>
            <input
              type="text"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
          <div>
            <label htmlFor="bmi" className="block font-medium mb-2">
              BMI
            </label>
            <input
              type="text"
              id="bmi"
              name="bmi"
              value={formData.bmi}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
          <div>
            <label htmlFor="contactNumber" className="block font-medium mb-2">
              Contact Number
            </label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="passportNumber" className="block font-medium mb-2">
              Passport Number
            </label>
            <input
              type="text"
              id="passportNumber"
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
          <div>
            <label htmlFor="nationality" className="block font-medium mb-2">
              Nationality
            </label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="currentAddress" className="block font-medium mb-2">
          Current Address
        </label>
        <textarea
          id="currentAddress"
          name="currentAddress"
          value={formData.currentAddress}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md py-2 px-3 w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Next
      </button>
    </form>
    </div>
          <div className="w-1/3">
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;