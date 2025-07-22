"use client";

import PageHeading from "@/app/components/PageHeading";

const academicData = [
  {
    id: 1,
    dade: "১ জানুয়ারি",
    event: "নতুন বছরের প্রথম দিন",
  },
  {
    id: 2,
    dade: "১ এপ্রিল",
    event: "প্রথম সাময়িক পরীক্ষা",
  },
  {
    id: 3,
    dade: "১ এপ্রিল",
    event: "প্রথম সাময়িক পরীক্ষা",
  },
  {
    id: 4,
    dade: "১ জুলাই",
    event: "অর্ধ-বার্ষিক পরীক্ষা",
  },
  {
    id: 5,
    dade: "১ সেপ্টেম্বর",
    event: "এস.এস.সি. প্রি-টেস্ট পরীক্ষা",
  },
  {
    id: 6,
    dade: "১৬ সেপ্টেম্বর",
    event: "বার্ষিক পরীক্ষা",
  },
  {
    id: 7,
    dade: "২৪ ডিসেম্বর",
    event: "এস.এস.সি. প্টেস্ট পরীক্ষা",
  },
];

export default function StudentCalendarPage() {
  return (
    <main className="max-w-4xl mx-auto px-2 space-y-6">
      <PageHeading title="একাডেমিক ক্যালেন্ডার" />

      <p className="text-gray-700 text-center text-sm md:text-lg">
        এখানে ২০২৫ শিক্ষাবর্ষের সকল ক্লাস, পরীক্ষা, ছুটি ও অন্যান্য গুরুত্বপূর্ণ
        দিনসমূহের সময়সূচি দেওয়া হলো।
      </p>

      <div className="overflow-x-auto text-sm md:text-lg mt-6">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-blue-100 text-left">
              <th className="p-2 border-b border-gray-300">তারিখ</th>
              <th className="p-2 border-b border-gray-300">ইভেন্ট</th>
            </tr>
          </thead>
          <tbody>
            {academicData.map((item) => (
              <tr key={item.id}>
                <td className="p-2 border-b text-gray-700 border-gray-200">
                  {item.dade}
                </td>
                <td className="p-2 border-b text-gray-700 border-gray-200">
                  {item.event}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
