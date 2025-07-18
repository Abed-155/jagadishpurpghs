import SubHeading from "./SubHeading";

export default function QuickContact() {
  return (
    <section className="text-center bg-blue-100 p-6 rounded-lg">
      <SubHeading title="স্কুল সম্পর্কে আরও জানতে চান?" />
      <p className="text-gray-700 mb-4">
        আমাদের অফিসে যোগাযোগ করুন বা কল করুন: <strong>০১৮৩৬-২২৫৮৮৬</strong>
      </p>
      <a
        href="/contact"
        className="inline-block bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900 transition"
      >
        যোগাযোগ করুন
      </a>
    </section>
  );
}
