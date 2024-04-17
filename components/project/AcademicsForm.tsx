import React, { useState } from 'react';


const AcademicsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    degree: '',
    institutionName: '',
    fieldOfStudy: '',
    graduationYear: '',
    gpaGrade: '',
    nursingLicenseNo: '',
    licensingAuthority: '',
    certifications: '',
    certificationDate: '',
    hasInternationalExperience: false,
    currentEmployment: '',
    jobTitle: '',
    department: '',
    startDate: '',
    endDate: '',
    totalExperience: {
      years: '',
      months: '',
    },
    dutiesResponsibilities: '',
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
    <div className="flex">
      <div className="flex-1 bg-gray-100 p-6">
        <div className="flex space-x-6">
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-4">Qualification</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="degree" className="block font-medium mb-2">
                      Degree
                    </label>
                    <select
                      id="degree"
                      name="degree"
                      value={formData.degree}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md py-2 px-3 w-full"
                    >
                      <option value="">Select degree</option>
                      {/* Populate options for degree */}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="institutionName" className="block font-medium mb-2">
                      Institution Name
                    </label>
                    <input
                      type="text"
                      id="institutionName"
                      name="institutionName"
                      value={formData.institutionName}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md py-2 px-3 w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="fieldOfStudy" className="block font-medium mb-2">
                      Field Of Study
                    </label>
                    <select
                      id="fieldOfStudy"
                      name="fieldOfStudy"
                      value={formData.fieldOfStudy}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md py-2 px-3 w-full"
                    >
                      <option value="">Select field of study</option>
                      {/* Populate options for field of study */}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="graduationYear" className="block font-medium mb-2">
                      Graduation Year
                    </label>
                    <input
                      type="text"
                      id="graduationYear"
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md py-2 px-3 w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="gpaGrade" className="block font-medium mb-2">
                      GPA/Grade
                    </label>
                    <input
                      type="text"
                      id="gpaGrade"
                      name="gpaGrade"
                      value={formData.gpaGrade}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md py-2 px-3 w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-4">License & Certification</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nursingLicenseNo" className="block font-medium mb-2">
                      Nursing License No.
                    </label>
                    <input
                      type="text"
                      id="nursingLicenseNo"
                      name="nursingLicenseNo"
                      value={formData.nursingLicenseNo}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md py-2 px-3 w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="licensingAuthority" className="block font-medium mb-2">
                      Licensing Authority
                    </label>
                    <input
                      type="text"
                      id="licensingAuthority"
                      name="licensingAuthority"
                      value={formData.licensingAuthority}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md py-2 px-3 w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="certifications" className="block font-medium mb-2">
                      Certifications (if any)
                    </label>
                    <input
                      type="text"
                      id="certifications"
                      name="certifications"
                      value={formData.certifications}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md py-2 px-3 w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="certificationDate" className="block font-medium mb-2">
                      Certification Date
                    </label>
                    <input
                      type="text"
                      id="certificationDate"
                      name="certificationDate"
                      value={formData.certificationDate}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md py-2 px-3 w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hasInternationalExperience" className="block font-medium mb-2">
                      International Experience
                    </label>
                    <div className="flex items-center">
                      <label className="flex items-center mr-4">
                        <input
                          type="radio"
                          id="hasInternationalExperience"
                          name="hasInternationalExperience"
                          value="true"
                          checked={formData.hasInternationalExperience}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              hasInternationalExperience: e.target.value === 'true',
                            })
                          }
                          className="mr-2"
                        />
                        Yes
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          id="hasInternationalExperience"
                          name="hasInternationalExperience"
                          value="false"
                          checked={!formData.hasInternationalExperience}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              hasInternationalExperience: e.target.value === 'true',
                            })
                          }
                          className="mr-2"
                        />
                        No
                      </label>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="currentEmployment" className="block font-medium mb-2">
                      Current Employment
                    </label>
                    <input
                      type="text"
                      id="currentEmployment"
                      name="currentEmployment"
                      value={formData.currentEmployment}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md py-2 px-3 w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="jobTitle" className="block font-medium mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md py-2 px-3 w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="department" className="block font-medium mb-2">
                      Department
                    </label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md py-2 px-3 w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="startDate" className="block font-medium mb-2">
                      Start/End Dates
                    </label>
                    <div className="flex space-x-4">
                      <input
                        type="text"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md py-2 px-3 flex-1"
                        placeholder="Start Date"
                      />
                      <input
                        type="text"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md py-2 px-3 flex-1"
                        placeholder="End Date"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="totalExperience" className="block font-medium mb-2">
                      Total Experience
                    </label>
                    <div className="flex space-x-4">
                      <input
                        type="text"
                        id="totalExperienceYears"
                        name="totalExperience.years"
                        value={formData.totalExperience.years}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md py-2 px-3 flex-1"
                        placeholder="Years"
                      />
                      <input
                        type="text"
                        id="totalExperienceMonths"
                        name="totalExperience.months"
                        value={formData.totalExperience.months}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md py-2 px-3 flex-1"
                        placeholder="Months"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="dutiesResponsibilities" className="block font-medium mb-2">
                      Duties & Responsibilities
                    </label>
                    <textarea
                      id="dutiesResponsibilities"
                      name="dutiesResponsibilities"
                      value={formData.dutiesResponsibilities}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md py-2 px-3 w-full"
                    />
                  </div>
                </div>
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
            {/* Quick Actions component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsForm;