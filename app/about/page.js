"use client";

import Head from "next/head";
import PageHeading from "../components/PageHeading";
import QuickContact from "../components/QuickContact";
import SubHeading from "../components/SubHeading";
import SchoolAchieve from "./SchoolAchieve";
import SchoolFeature from "./SchoolFeature";
import StudentStatsTable from "./SchoolStats";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>আমাদের সম্পর্কে | জগদীশপুর পাবলিক গার্লস হাই স্কুল</title>
        <meta
          name="description"
          content="আমাদের স্কুলে রয়েছে দক্ষ শিক্ষক মণ্ডলী, যুগোপযোগী পাঠদান পদ্ধতি ও শিক্ষার মান উন্নয়নে অবিচল অঙ্গীকার।"
        />
      </Head>

      <main className="max-w-5xl mx-auto px-2 md:p-6 space-y-10">
        <PageHeading title="আমাদের সম্পর্কে" />
        {/* School Description */}
        <section className="bg-white p-4 md:p-6 rounded-lg shadow border border-blue-100">
          <SubHeading title="প্রতিষ্ঠানের ইতিহাস" />
          <div className="md:text-xl text-sm">
            <p className="text-gray-700 text-justify leading-relaxed space-y-4">
              আমাদের স্কুলটি ২০১৯ সালে প্রতিষ্ঠিত। জাহাংগীর হোসেন, আসগর আলী,
              মনিরুল হক ও দেলোয়ার হোসেন বাবুল তাদের উদ্যোগে এই স্কুলটি
              প্রতিষ্ঠিত হয়। প্রতিষ্ঠার শুরু থেকেই বিদ্যালয়টি শিক্ষার্থীদের
              মানসম্মত শিক্ষা, নৈতিকতা ও সৃজনশীলতায় বিকাশে কাজ করে আসছে।
            </p>
            <p className="text-gray-700 text-justify leading-relaxed mt-4">
              বিদ্যালয়টি একটি নিরাপদ ও অনুপ্রেরণামূলক শিক্ষার পরিবেশ গড়ে তুলতে
              প্রতিশ্রুতিবদ্ধ। আমাদের পাঠদানে আধুনিক প্রযুক্তির ব্যবহার, দক্ষ ও
              অভিজ্ঞ শিক্ষকবৃন্দের নিরলস প্রচেষ্টা এবং শিক্ষার্থীদের
              স্বতঃস্ফূর্ত অংশগ্রহণ একটি ইতিবাচক শিক্ষাজীবন নিশ্চিত করে।
            </p>
            <p className="text-gray-700 text-justify leading-relaxed mt-4">
              আমাদের লক্ষ্য হচ্ছে একটি শিক্ষিত, সচেতন ও দক্ষ প্রজন্ম গড়ে তোলা
              যারা ভবিষ্যতে সমাজ ও দেশের উন্নয়নে গুরুত্বপূর্ণ ভূমিকা পালন করতে
              পারবে।
            </p>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="bg-white p-4 md:p-6 rounded-lg shadow border border-blue-100">
          <SubHeading title="আমাদের মিশন ও ভিশন" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl text-gray-800 font-semibold mb-2">মিশন</h3>
              <p className="text-gray-700 text-sm md:text-lg">
                সকল শিশুকে মানসম্মত শিক্ষা প্রদান, আত্মবিশ্বাস ও নেতৃত্বের
                গুণাবলি গড়ে তোলা।
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl text-gray-800 font-semibold mb-2">ভিশন</h3>
              <p className="text-gray-700 text-sm md:text-lg">
                একটি উন্নত, প্রযুক্তিনির্ভর ও মানবিক সমাজ নির্মাণে শিক্ষার্থীদের
                প্রস্তুত করা।
              </p>
            </div>
          </div>
        </section>

        <SchoolFeature />

        <SchoolAchieve />

        <StudentStatsTable />

        <QuickContact />
      </main>
    </>
  );
}
