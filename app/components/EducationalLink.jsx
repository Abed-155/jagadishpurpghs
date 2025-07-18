import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const eduLink = [
  {
    id: 1,
    title: "শিক্ষা মন্ত্রণালয়",
    url: "https://moedu.gov.bd",
  },
  {
    id: 2,
    title: "মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর",
    url: "https://dshe.gov.bd",
  },
  {
    id: 3,
    title: "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড",
    url: "https://www.educationboard.gov.bd",
  },
  {
    id: 4,
    title: "বাংলাদেশ শিক্ষা বোর্ড",
    url: "https://www.educationboard.gov.bd",
  },
  {
    id: 5,
    title: "শিক্ষক বাতায়ন",
    url: "https://www.teachers.gov.bd",
  },
];

export default function EducationalLink() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-3 text-blue-300">
        শিক্ষা বিষয়ক লিংক
      </h3>
      <ul className="space-y-2 text-sm text-gray-300">
        {eduLink.map((item) => (
          <li key={item.id} className="flex gap-1 items-center">
            <FaLongArrowAltRight />
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 underline"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
