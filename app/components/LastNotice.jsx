"use client";
import Link from "next/link";
import { notices } from "../notice-board/data";
import SubHeading from "./SubHeading";

// Dummy notices array (remove this if already coming from props or data file)

export default function LastNotice() {
  const lastNotice = notices[notices.length - 1];

  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl border border-blue-100 shadow-md p-4 max-w-5xl mx-auto mt-6">
      <div className="flex items-center justify-between mb-3">
        <SubHeading title="সর্বশেষ নোটিশ" />
        <Link
          href="/notice-board"
          className="text-sm text-blue-600 hover:underline"
        >
          সব নোটিশ দেখুন →
        </Link>
      </div>

      <div className="bg-blue-100 p-2 rounded-md">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="5"
          className="text-blue-900 font-medium"
        >
          {lastNotice.title}
        </marquee>
      </div>
    </section>
  );
}
