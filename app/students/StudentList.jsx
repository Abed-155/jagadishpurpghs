"use client";

import { useState } from "react";
import { studentsData } from "./data";
import SubHeading from "../components/SubHeading";
import StudentCard from "./StudentCard";
import { filtered } from "./filtered-students";

export default function StudentList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");

  const filteredStudents = filtered(studentsData, searchTerm, selectedClass);

  return (
    <div className="bg-white md:p-6 rounded-lg shadow-md border border-gray-200">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-50 text-white px-6 py-4">
          <SubHeading title="ছাত্রী তালিকা" />
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between gap-4 p-4">
          <input
            type="search"
            placeholder="Search by name"
            className="w-full md:w-96 px-4 py-2 border-b-2 border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-md text-gray-700 placeholder-gray-400 shadow-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="w-full md:w-60 px-4 py-2 border-2 border-blue-400 rounded-md text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="all">All</option>
            <option value="six">Six</option>
            <option value="seven">Seven</option>
            <option value="eight">Eight</option>
            <option value="nine">Nine</option>
            <option value="ten">Ten</option>
            <option value="science">Science</option>
            <option value="humanities">Humanities</option>
          </select>
        </div>

        <div className="px-4">
          <h2 className="text-xl">Total Students: {studentsData.length}</h2>
        </div>

        <StudentCard students={filteredStudents} />
      </div>
    </div>
  );
}
