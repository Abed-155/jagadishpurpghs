// app/teachers/[id]/page.jsx

import { FaArrowLeft, FaFacebook } from "react-icons/fa";
import { teachers } from "../data";
import Link from "next/link";
import Image from "next/image";

export default function TeacherDetails({ params }) {
  const teacher = teachers.find((t) => t.id === params.id);

  if (!teacher) return <p>Teacher not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-2 md:p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <Image
          src={teacher.image}
          width={300}
          height={300}
          alt={teacher.name}
          className="w-48 h-48 rounded-full object-cover mx-auto mb-4 border-4 border-blue-200"
        />

        <h3 className="text-xl md:text-3xl font-bold text-blue-700 mb-2">
          {teacher.name}
        </h3>
        <p className="text-sm md:text-lg text-gray-700 mb-1">
          <strong>পদবী:</strong> {teacher.designation}
        </p>
        <p className="text-sm md:text-lg text-gray-700 mb-1">
          <strong>বিষয়:</strong> {teacher.subject}
        </p>
        <p className="text-sm md:text-lg text-gray-700 mb-1">
          <strong>শিক্ষাগত যোগ্যতা:</strong> {teacher.education}
        </p>
        <p className="text-sm md:text-lg text-gray-700 mb-1">
          <strong>নিয়োগের তারিখ:</strong> {teacher.joinDate}
        </p>
        <p className="text-sm md:text-lg text-gray-700 mb-1">
          <strong>মোবাইল নম্বর:</strong> {teacher.phone}
        </p>
        <p className="text-sm md:text-lg text-gray-600 mt-4 italic">
          {teacher.bio}
        </p>

        {teacher.facebook && (
          <div className="mt-6">
            <a
              href={teacher.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Facebook
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
