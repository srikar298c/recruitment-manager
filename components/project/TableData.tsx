"use client"
import React, { useState } from 'react';

interface TableData {
  name: string;
  contact: string;
  mailId: string;
  assignedTo: string;
}

const tableData: TableData[] = [
  {
    name: 'NameNameNameNameName',
    contact: '1234567890',
    mailId: 'NameNameNameNameName',
    assignedTo: 'Admin at 00:00 hrs',
  },
  // Add more data objects as needed
];

const TableComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(tableData);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = tableData.filter(
      (data) =>
        data.name.toLowerCase().includes(term) ||
        data.contact.includes(term) ||
        data.mailId.toLowerCase().includes(term) ||
        data.assignedTo.toLowerCase().includes(term)
    );

    setFilteredData(filtered);
  };

  const handleRowClick = (data: TableData) => {
    // Handle row click event here
    console.log('Clicked row:', data);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <table className="w-full table-auto bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Contact</th>
            <th className="px-4 py-2">Mail Id</th>
            <th className="px-4 py-2">Assigned to</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.slice(0, 7).map((data, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-100 cursor-pointer"
              onClick={() => handleRowClick(data)}
            >
              <td className="px-4 py-2">{data.name}</td>
              <td className="px-4 py-2">{data.contact}</td>
              <td className="px-4 py-2">{data.mailId}</td>
              <td className="px-4 py-2">{data.assignedTo}</td>
              <td className="px-4 py-2">
                <div className="flex justify-center">
                  <button className="mr-2 text-gray-500 hover:text-gray-700">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="mr-2 text-gray-500 hover:text-gray-700">
                    <i className="fas fa-download"></i>
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <i className="fas fa-star"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;