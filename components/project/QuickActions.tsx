import React from 'react'

export default function QuickActions() {
  return (
   <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="bg-teal-500 text-white rounded-full px-2 py-1 mr-2">O</span>
            <span>Add</span>
          </li>
          <li className="flex items-center">
            <span className="bg-teal-500 text-white rounded-full px-2 py-1 mr-2">&#9776;</span>
            <span>Notes</span>
          </li>
          <li className="flex items-center">
            <span className="bg-teal-500 text-white rounded-full px-2 py-1 mr-2">&#9675;</span>
            <span>Schedule Interview</span>
          </li>
          <li className="flex items-center">
            <span className="bg-red-500 text-white rounded-full px-2 py-1 mr-2">&#10005;</span>
            <span>Rejected</span>
          </li>
          <li className="flex items-center">
            <span className="bg-teal-500 text-white rounded-full px-2 py-1 mr-2">&#9888;</span>
            <span>Notify Me</span>
          </li>
          <li className="flex items-center">
            <span className="bg-teal-500 text-white rounded-full px-2 py-1 mr-2">&#9873;</span>
            <span>Label</span>
          </li>
          <li className="flex items-center">
            <span className="bg-teal-500 text-white rounded-full px-2 py-1 mr-2">&#9200;</span>
            <span>Reminder</span>
          </li>
          <li className="flex items-center">
            <span className="bg-teal-500 text-white rounded-full px-2 py-1 mr-2">&#9881;</span>
            <span>Settings</span>
          </li>
        </ul>
      </div>
  )
}
