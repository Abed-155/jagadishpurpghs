"use client";

import Link from "next/link";

const classRoutines = [
  {
    className: "ষষ্ঠ শ্রেণি",
    pdfLink: "/routines/class6.pdf",
  },
  {
    className: "সপ্তম শ্রেণি",
    pdfLink: "/routines/class7.pdf",
  },
  {
    className: "অষ্টম শ্রেণি",
    pdfLink: "/routines/class8.pdf",
  },
  {
    className: "নবম শ্রেণি",
    pdfLink: "/routines/class9.pdf",
  },
  {
    className: "দশম শ্রেণি",
    pdfLink: "/routines/class10.pdf",
  },
];

export default function RoutinePage() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">📅 ক্লাস রুটিন</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {classRoutines.map((routine, index) => (
          <div
            key={index}
            className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {routine.className}
            </h2>
            <p className="text-gray-600 mb-4">
              এই শ্রেণির ক্লাস রুটিন ডাউনলোড করতে নিচের বাটনে ক্লিক করুন।
            </p>
            <Link
              href={routine.pdfLink}
              target="_blank"
              download
              className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              📥 পিডিএফ ডাউনলোড
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
