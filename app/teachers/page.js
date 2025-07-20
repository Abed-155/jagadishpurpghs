"use client";
import Link from "next/link";
import Image from "next/image";
import { teachers } from "./data";
import PageHeading from "../components/PageHeading";
import QuickContact from "../components/QuickContact";
import Head from "next/head";

export default function TeacherList() {
  return (
    <>
      <Head>
        <title>শিক্ষকমণ্ডলী | জগদীশপুর পাবলিক গার্লস হাই স্কুল</title>
        <meta
          name="description"
          content="জগদীশপুর পাবলিক গার্লস হাই স্কুলের অভিজ্ঞ ও দক্ষ শিক্ষকমণ্ডলীর তালিকা ও তথ্য।"
        />
      </Head>
      <main className="max-w-6xl mx-auto p-2 md:p-6">
        <PageHeading title="আমাদের শিক্ষকমন্ডলী" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-blue-200 mb-4">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h2 className="text-lg text-blue-600 font-semibold">
                {teacher.name}
              </h2>
              <p className="text-sm text-gray-500">{teacher.designation}</p>
              <p className="text-xs text-gray-500 mb-4">{teacher.subject}</p>

              <Link
                href={`/teachers/${teacher.id}`}
                className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                বিস্তারিত দেখুন
              </Link>
            </div>
          ))}
        </div>
        <QuickContact />
      </main>
    </>
  );
}
