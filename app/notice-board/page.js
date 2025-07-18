"use client";
import { FaDownload } from "react-icons/fa";
import PageHeading from "../components/PageHeading";
import { notices } from "./data";

export default function NoticeBoard() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-6 px-4">
      <div className="max-w-5xl mx-auto">
        <PageHeading title=" নোটিশ বোর্ড" />

        <div className="grid md:grid-cols-2 gap-6">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                {notice.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                তারিখ: {notice.date}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {notice.description}
              </p>

              {/* PDF Download Button */}
              <a
                href={notice.pdfUrl}
                download
                className="inline-flex items-center gap-2 text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
              >
                <FaDownload className="text-white" />
                PDF ডাউনলোড করুন
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
