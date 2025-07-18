"use client";

import Link from "next/link";
import PageHeading from "../components/PageHeading";
import StudentList from "./StudentList";
import SubHeading from "../components/SubHeading";
import Academic from "./Academic";
import QuickContact from "../components/QuickContact";
import Head from "next/head";

export default function StudentCorner() {
  return (
    <>
      <Head>
        <title>শিক্ষার্থীদের তালিকা | জগদীশপুর পাবলিক গার্লস হাই স্কুল</title>
        <meta
          name="description"
          content="জগদীশপুর পাবলিক গার্লস হাই স্কুলের সকল শ্রেণির শিক্ষার্থীদের রোল নম্বর, নাম ও গ্রুপভিত্তিক তালিকা।"
        />
      </Head>
      <main className="max-w-5xl mx-auto p-6 space-y-12">
        <PageHeading title=" শিক্ষার্থী কর্নার" />
        <Academic />

        {/* Notice Board Section */}
        <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <SubHeading title="নোটিশ বোর্ড" />
          <p className="text-gray-700">
            নতুন নোটিশ, পরীক্ষার সময়সূচী, এবং অন্যান্য গুরুত্বপূর্ণ তথ্য এখান
            থেকে পাওয়া যাবে।
          </p>
          <Link
            href="/notice-board"
            className="inline-block mt-4 bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800 transition"
          >
            নোটিশ দেখুন
          </Link>
        </section>

        {/* Downloads Section */}
        <section className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-200">
          <SubHeading title="ডাউনলোডস" />
          <p className="text-blue-900 mb-4">
            প্রয়োজনীয় ফরম, গাইডলাইন ও অন্যান্য ডকুমেন্ট ডাউনলোড করুন।
          </p>
          <Link
            href="/downloads"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            ডাউনলোডস দেখুন
          </Link>
        </section>

        <StudentList />

        <QuickContact />
      </main>
    </>
  );
}
