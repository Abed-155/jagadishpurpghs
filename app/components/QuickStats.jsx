import SubHeading from "./SubHeading";

export default function QuickStats() {
  const stats = [
    { label: "Total Students", value: "70+" },
    { label: "Total Teachers", value: "6+" },
    { label: "SSC Pass Rate (2024)", value: "77.78%" },
    { label: "SSC Pass Rate (2025)", value: "69.23%" },
  ];

  return (
    <section className="bg-blue-50 max-w-5xl p-2 md:p6 rounded-lg shadow border border-blue-100">
      <div className="max-w-6xl mx-auto text-center">
        <SubHeading title=" ফলাফল ও পরিসংখ্যান" />
        <div className="grid grid-cols-2 md:grid-cols-4 md:p-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <p className="md:text-2xl text-xl font-bold text-blue-700">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
