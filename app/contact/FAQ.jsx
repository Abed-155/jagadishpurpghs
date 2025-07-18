import React from "react";
import SubHeading from "../components/SubHeading";

const faqData = [
  {
    id: 1,
    question: "ভর্তির সময় কখন?",
    answer:
      "সাধারণত ডিসেম্বর-জানুয়ারি মাসে ভর্তি কার্যক্রম শুরু হয়। বিস্তারিত অফিসে যোগাযোগ করুন।",
  },
  {
    id: 2,
    question: "রেজাল্ট কোথায় পাওয়া যাবে?",
    answer:
      "বিদ্যালয়ের ওয়েবসাইটের Students/Academic Result পেইজে ফলাফল প্রকাশ করা হয়।",
  },
  {
    id: 3,
    question: "ক্লাস কবে শুরু হয়?",
    answer: "প্রতি শিক্ষাবর্ষের ক্লাস জানুয়ারির প্রথম সপ্তাহে শুরু হয়।",
  },
  {
    id: 4,
    question: "কোন কোন শ্রেণিতে ভর্তি করানো হয়?",
    answer: "ষষ্ঠ, সপ্তম, অষ্টম ও নবম শ্রেণিতে।",
  },
  {
    id: 5,
    question: "নবম-দশম শ্রেণিতে কি কি গ্রুপ আছে?",
    answer: "মানবিক ও বিজ্ঞান।",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <SubHeading title="সাধারণ প্রশ্ন ও উত্তর" />
      <div className="space-y-4 text-gray-700">
        {faqData.map((item) => (
          <div key={item.id} className="bg-blue-50 p-4 rounded-lg shadow-sm ">
            <p className="font-semibold">🔹 {item.question}</p>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
