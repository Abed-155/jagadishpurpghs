"use client";

export default function StudentCalendarPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">
        শিক্ষার্থীদের একাডেমিক ক্যালেন্ডার
      </h1>

      <p className="text-gray-700">
        এখানে ২০২৫ শিক্ষাবর্ষের সকল ক্লাস, পরীক্ষা, ছুটি ও অন্যান্য গুরুত্বপূর্ণ
        দিনসমূহের সময়সূচি দেওয়া হলো।
      </p>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-blue-100 text-left">
              <th className="p-2 border-b border-gray-300">তারিখ</th>
              <th className="p-2 border-b border-gray-300">ইভেন্ট</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b border-gray-200">১ জানুয়ারি</td>
              <td className="p-2 border-b border-gray-200">
                নতুন বছরের প্রথম দিন
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-2 border-b border-gray-200">১৫ ফেব্রুয়ারি</td>
              <td className="p-2 border-b border-gray-200">
                প্রথম সাময়িক পরীক্ষা
              </td>
            </tr>
            <tr>
              <td className="p-2 border-b border-gray-200">১৭ মার্চ</td>
              <td className="p-2 border-b border-gray-200">
                জাতির পিতার জন্মদিন
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-2 border-b border-gray-200">২৬ মার্চ</td>
              <td className="p-2 border-b border-gray-200">স্বাধীনতা দিবস</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-gray-200">১ এপ্রিল</td>
              <td className="p-2 border-b border-gray-200">
                পুনর্মূল্যায়ন পরীক্ষা
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
