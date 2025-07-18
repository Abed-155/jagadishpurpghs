import Image from "next/image";
import SubHeading from "./SubHeading";

export default function HeadTeacherMessage() {
  return (
    <section className="bg-blue-50 max-w-5xl p-6 rounded-lg shadow border border-blue-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* ছবি */}
        <div className="w-full md:w-1/3">
          <Image
            src="/teachers/lukman.jpg"
            alt="Head Teacher"
            width={400}
            height={500}
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
        </div>

        {/* বার্তা */}
        <div className="w-full md:w-2/3">
          <SubHeading title=" প্রধান শিক্ষকের বার্তা" />
          <p className="text-gray-700 leading-relaxed text-justify">
            প্রিয় অভিভাবক, শিক্ষার্থী ও শিক্ষকবৃন্দ,
            <br />
            <br />
            আমাদের স্কুল ২০১৯ সালে প্রতিষ্ঠিত হয়। প্রতিষ্ঠার শুরু থেকে আমরা
            শিক্ষার্থীদের নৈতিকতা, জ্ঞান ও শৃঙ্খলার সমন্বয় ঘটানোর লক্ষ্যে কাজ
            করে যাচ্ছি। আমরা বিশ্বাস করি শিক্ষাই জাতির মেরুদণ্ড এবং সুশিক্ষাই
            পারে একটি সভ্য সমাজ গঠন করতে।
            <br />
            <br />
            আমি কৃতজ্ঞতা প্রকাশ করছি যাঁরা এই স্কুল প্রতিষ্ঠা ও উন্নয়নে অবদান
            রেখেছেন। আমাদের সকলের সম্মিলিত প্রচেষ্টায় আমরা আগামী দিনগুলোতেও
            এগিয়ে যাব।
            <br />
            <span className="font-semibold block mt-4 text-blue-800">
              – মোঃ লোকমান হোসেন
              <br />
              প্রধান শিক্ষক
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
