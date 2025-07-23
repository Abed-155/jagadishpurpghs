import Link from "next/link";
import SubHeading from "../components/SubHeading";

export default function PresidentsMessage() {
  return (
    <section className="bg-blue-50 max-w-5xl p-4 md:p-8 rounded-lg shadow border border-blue-100">
      <SubHeading title="সভাপতির বার্তা" />
      <p className="text-gray-700 leading-7 mb-4 text-justify">
        জগদীশপুর পাবলিক গার্লস হাই স্কুল একটি সুপ্রতিষ্ঠিত শিক্ষাপ্রতিষ্ঠান, যা
        আমাদের এলাকার কন্যাশিক্ষার অগ্রগতিতে এক গুরুত্বপূর্ণ ভূমিকা রাখছে।
        আধুনিক শিক্ষার আলো ছড়িয়ে দিতে আমরা শিক্ষার্থীদের জন্য উন্নত পাঠদান,
        নৈতিক শিক্ষা, ও প্রযুক্তিনির্ভর শেখার সুযোগ সৃষ্টি করেছি।
      </p>
      <Link href="/prsident-msg" className="text-blue-800 underline">
        বিস্তারিত
      </Link>
    </section>
  );
}
