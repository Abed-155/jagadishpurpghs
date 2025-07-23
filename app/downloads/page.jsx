// app/downloads/page.jsx

import DownloadBtn from "../components/DownloadBtn";
import PageHeading from "../components/PageHeading";
import QuickContact from "../components/QuickContact";

export default function DownloadsPage() {
  const downloads = [
    {
      title: "ক্লাস রুটিন",
      file: "/downloads/class-routine.pdf",
    },
    {
      title: "পরীক্ষার প্রবেশপত্র",
      file: "/downloads/admit-card.pdf",
    },
    {
      title: "সিলেবাস",
      file: "/downloads/syllabus.pdf",
    },
    {
      title: "ভর্তি ফর্ম",
      file: "/downloads/admission-form.pdf",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-2 md:p-6">
      <PageHeading title="ডাউনলোড" />
      <div className="grid md:gap-4 mb-4 bg-blue-50 p-2 md:p-4 rounded-lg shadow-md space-y-6">
        {downloads.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-2 md:p-4 flex items-center justify-between"
          >
            <span className="font-medium">{item.title}</span>
            <DownloadBtn url={item.file} />
          </div>
        ))}
      </div>
      <QuickContact />
    </main>
  );
}
