"use client";

import PageHeading from "@/app/components/PageHeading";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";

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
    <main className="max-w-4xl mx-auto px-2 space-y-6">
      <PageHeading title="ক্লাস রুটিন" />
      <div className="grid md:grid-cols-2 gap-6">
        {classRoutines.map((routine, index) => (
          <div
            key={index}
            className="bg-blue-50 md:p-6 p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              {routine.className}
            </h2>
            <p className="text-gray-600 mb-4 text-sm md:text-lg">
              এই শ্রেণির ক্লাস রুটিন ডাউনলোড করতে নিচের বাটনে ক্লিক করুন।
            </p>
            <Link
              href={routine.pdfLink}
              target="_blank"
              download
              className=" bg-blue-700 w-24 flex gap-2 items-center justify-center  text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              <FaFileDownload /> PDF
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
