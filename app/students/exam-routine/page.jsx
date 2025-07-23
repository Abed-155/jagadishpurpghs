"use client";

import DownloadBtn from "@/app/components/DownloadBtn";
import PageHeading from "@/app/components/PageHeading";
import SubHeading from "@/app/components/SubHeading";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";

const examRoutines = [
  {
    title: "প্রথম সাময়িক পরীক্ষা",
    pdfLink: "/exam-routines/first-term.pdf",
  },
  {
    title: "দ্বিতীয় সাময়িক পরীক্ষা",
    pdfLink: "/exam-routines/second-term.pdf",
  },
  {
    title: "প্রী-টেস্ট পরীক্ষা",
    pdfLink: "/exam-routines/pre-test.pdf",
  },
  {
    title: "টেস্ট পরীক্ষা",
    pdfLink: "/exam-routines/test.pdf",
  },
  {
    title: "এস.এস.সি পরীক্ষা",
    pdfLink: "/exam-routines/ssc.pdf",
  },
];

export default function ExamRoutinePage() {
  return (
    <main className="max-w-4xl mx-auto px-2 md:p-6 space-y-6">
      <PageHeading title="পরীক্ষার রুটিন" />
      <div className="grid md:grid-cols-2 gap-6">
        {examRoutines.map((exam, index) => (
          <div
            key={index}
            className="bg-blue-50 p-5 rounded-lg shadow hover:shadow-md transition"
          >
            <SubHeading title={exam.title} />
            <p className="text-gray-600 text-sm md:text-lg mb-4">
              {exam.title} এর রুটিন নিচের বাটনে ক্লিক করে ডাউনলোড করুন।
            </p>
            <DownloadBtn url={exam.pdfLink} />
          </div>
        ))}
      </div>
    </main>
  );
}
