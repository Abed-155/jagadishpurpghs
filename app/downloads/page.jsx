// app/downloads/page.jsx

export default function DownloadsPage() {
  const downloads = [
    {
      title: "📅 ক্লাস রুটিন (Class Routine)",
      file: "/downloads/class-routine.pdf",
    },
    {
      title: "🎫 পরীক্ষার প্রবেশপত্র (Exam Admit Card)",
      file: "/downloads/admit-card.pdf",
    },
    {
      title: "📘 সিলেবাস (Syllabus)",
      file: "/downloads/syllabus.pdf",
    },
    {
      title: "📝 ভর্তি ফর্ম (Admission Form)",
      file: "/downloads/admission-form.pdf",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        📥 ডাউনলোড সেকশন
      </h1>

      <div className="grid gap-6">
        {downloads.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex items-center justify-between"
          >
            <span className="font-medium">{item.title}</span>
            <a
              href={item.file}
              download
              className="bg-blue-700 text-white px-4 py-1.5 rounded hover:bg-blue-800 transition"
            >
              ডাউনলোড
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
