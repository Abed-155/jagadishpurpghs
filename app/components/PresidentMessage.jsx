import SubHeading from "./SubHeading";

export default function PresidentsMessage() {
  return (
    <section className="bg-blue-50 max-w-5xl p-4 md:p-8 rounded-lg shadow border border-blue-100">
      <SubHeading title=" সভাপতির বার্তা" />
      <p className="text-gray-700 leading-7 mb-4 text-justify">
        জগদীশপুর পাবলিক গার্লস হাই স্কুল একটি সুপ্রতিষ্ঠিত শিক্ষাপ্রতিষ্ঠান, যা
        আমাদের এলাকার কন্যাশিক্ষার অগ্রগতিতে এক গুরুত্বপূর্ণ ভূমিকা রাখছে।
        আধুনিক শিক্ষার আলো ছড়িয়ে দিতে আমরা শিক্ষার্থীদের জন্য উন্নত পাঠদান,
        নৈতিক শিক্ষা, ও প্রযুক্তিনির্ভর শেখার সুযোগ সৃষ্টি করেছি।
      </p>
      <p className="text-gray-700  leading-7 mb-4 text-justify">
        আমি বিশ্বাস করি, শুধু পাঠ্যবইয়ের জ্ঞান নয়, বরং দেশপ্রেম, মানবিকতা ও
        নেতৃত্বগুণও একজন শিক্ষার্থীর মধ্যে গড়ে তুলতে হবে। আমাদের স্কুলে সেই
        পরিপূর্ণ পরিবেশ গড়ে তোলার জন্য নিরলস প্রচেষ্টা চলছে।
      </p>
      <p className="text-gray-700  leading-7 mb-4 text-justify">
        আমরা চাই প্রতিটি ছাত্রী হোক আত্মবিশ্বাসী, দক্ষ ও নৈতিকভাবে দৃঢ়—যাতে তারা
        নিজেদের ভবিষ্যৎ গড়ার পাশাপাশি দেশ ও সমাজকেও গড়তে পারে। আমাদের
        শিক্ষকমণ্ডলী, অভিভাবক, এবং স্কুল পরিচালনা কমিটির সমন্বিত প্রচেষ্টাই এই
        স্বপ্নকে বাস্তবে রূপ দিচ্ছে।
      </p>
      <p className="text-gray-700  leading-7 text-justify">
        পরিশেষে, আমি সকল শিক্ষার্থীকে তাদের আগামী দিনের জন্য শুভকামনা জানাই এবং
        অভিভাবকদের পাশে থাকার জন্য আন্তরিক ধন্যবাদ জানাই।
      </p>

      <div className="mt-8 text-right">
        <p className="font-semibold text-gray-800">– সভাপতি</p>
        <p className="text-gray-600 text-sm">
          জগদীশপুর পাবলিক গার্লস হাই স্কুল
        </p>
      </div>
    </section>
  );
}
