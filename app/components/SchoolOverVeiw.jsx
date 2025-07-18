import SubHeading from "./SubHeading";

export default function SchoolOverview() {
  const info = [
    { label: "School Name", value: "Jagadishpur Public Girls' High School" },
    { label: "Established", value: "2019" },
    { label: "EIIN", value: "N/A" },
    { label: "Head Teacher", value: "MD. Lukman Uddin" },
    { label: "President", value: "Asgor Ali" },
    { label: "Location", value: "Jagadishpur, Madhabpur, Hagiganj" },
  ];

  return (
    <section className="bg-blue-50 max-w-5xl p-8 rounded-lg shadow border border-blue-100">
      <div className="max-w-4xl mx-auto px-4">
        <SubHeading title="এক নজরে স্কুল" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {info.map((item, i) => (
            <div
              key={i}
              className="flex justify-between bg-white rounded-xl shadow-lg p-5 border border-gray-200"
            >
              <span className="font-medium text-gray-700">{item.label}</span>
              <span className="text-gray-900 ">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
