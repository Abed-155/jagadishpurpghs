export default function HolidayPage() {
  const holidays = [
    {
      name: "শিক্ষাবর্ষের মোট ছুটি",
      duration: "৭৬ দিন",
      remarks: "বার্ষিক অনুমোদিত ছুটি",
    },
    {
      name: "রমজান ও ঈদুল ফিতরসহ জাতীয় ও ধর্মীয় ছুটি",
      duration: "২ মার্চ – ৭ এপ্রিল",
      remarks: "মোট ২৮ দিন",
    },
    {
      name: "ঈদুল আযহার ছুটি ও গ্রীষ্মকালীন অবকাশ",
      duration: "১ জুন – ১৯ জুন",
      remarks: "মোট ১৫ দিন",
    },
    {
      name: "দুর্গাপূজা ও অন্যান্য ধর্মীয় ছুটি",
      duration: "৮ দিন",
      remarks: "লক্ষ্মীপূজা, প্রবারণা পূর্ণিমা ইত্যাদি",
    },
    {
      name: "শীতকালীন ছুটি",
      duration: "ডিসেম্বর",
      remarks: "সর্বশেষ ৭ দিন (নির্ধারিত)",
    },
    {
      name: "জাতীয় দিবস",
      duration: "২১ ফেব্রুয়ারি, ২৬ মার্চ, ১৪ এপ্রিল, ১৬ ডিসেম্বর",
      remarks: "আন্তর্জাতিক মাতৃভাষা, স্বাধীনতা, নববর্ষ, বিজয় দিবস",
    },
    {
      name: "প্রধান শিক্ষক সংরক্ষিত ছুটি",
      duration: "৩ দিন",
      remarks: "প্রয়োজনীয়তা অনুযায়ী",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">
        📅 বার্ষিক ছুটির তালিকা (২০২৫)
      </h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-100 text-left text-blue-900">
            <tr>
              <th className="px-6 py-3 font-semibold">ছুটির নাম</th>
              <th className="px-6 py-3 font-semibold">সময়কাল</th>
              <th className="px-6 py-3 font-semibold">মন্তব্য</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {holidays.map((holiday, index) => (
              <tr key={index} className="hover:bg-blue-50 transition">
                <td className="px-6 py-4">{holiday.name}</td>
                <td className="px-6 py-4">{holiday.duration}</td>
                <td className="px-6 py-4">{holiday.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
