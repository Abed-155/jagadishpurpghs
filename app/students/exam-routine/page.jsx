"use client";

import PageHeading from "@/app/components/PageHeading";
import Link from "next/link";

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
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {exam.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {exam.title} এর রুটিন নিচের বাটনে ক্লিক করে ডাউনলোড করুন।
            </p>
            <Link
              href={exam.pdfLink}
              target="_blank"
              download
              className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800  transition"
            >
              📥 পিডিএফ ডাউনলোড
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
