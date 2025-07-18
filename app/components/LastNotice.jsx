"use client";

import Link from "next/link";
import { notices } from "../notice-board/data";
import SubHeading from "./SubHeading";

export default function LastNotice() {
  const lastNotice = notices.slice(-2);
  return (
    <section className="bg-white max-w-5xl p-8 rounded-lg shadow border border-blue-100">
      <SubHeading title="সর্বশেষ নোটিশ" />
      <div className="space-y-4">
        {lastNotice.map((notice) => (
          <div
            key={notice.id}
            className="bg-blue-50 dark:bg-gray-800 p-4 rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-blue-600">{notice.title}</h3>
              <p className="text-sm">তারিখ: {notice.date}</p>
            </div>
            <a
              href={notice.pdfUrl}
              download
              className="text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              ডাউনলোড
            </a>
          </div>
        ))}
      </div>
      <div className="text-right mt-4">
        <Link href="/notice-board" className="text-blue-500 hover:underline">
          সব নোটিশ দেখুন →
        </Link>
      </div>
    </section>
  );
}
