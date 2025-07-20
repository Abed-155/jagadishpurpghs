"use client";
import { FaDownload } from "react-icons/fa";
import PageHeading from "../components/PageHeading";
import { notices } from "./data";
import QuickContact from "../components/QuickContact";

export default function NoticeBoard() {
  return (
    <section className=" px-2 md:p-6">
      <PageHeading title=" নোটিশ বোর্ড" />
      <div className="max-w-5xl mx-auto dark:bg-gray-900">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 md:p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-0.5 text-blue-600 dark:text-blue-400">
                {notice.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                তারিখ: {notice.date}
              </p>
              <p className="text-gray-700 text-sm md:text-lg dark:text-gray-300 mb-4">
                {notice.description}
              </p>

              {/* PDF Download Button */}
              <a
                href={notice.pdfUrl}
                download
                className="inline-flex items-center gap-2 text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
              >
                <FaDownload className="text-white" />
                PDF
              </a>
            </div>
          ))}
        </div>
        <QuickContact />
      </div>
    </section>
  );
}
