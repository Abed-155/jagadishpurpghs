import React from "react";
import SubHeading from "../components/SubHeading";
import Link from "next/link";

const academicInfo = [
  {
    id: 1,
    title: "একাডেমিক ক্যালেন্ডার",
    href: "/students/calendar",
  },
  {
    id: 2,
    title: "ক্লাস রুটিন",
    href: "/students/routine",
  },
  {
    id: 3,
    title: "পরীক্ষার রুটিন",
    href: "/students/exam-routine",
  },
  {
    id: 4,
    title: "ছুটির তালিকা",
    href: "/students/holidays",
  },
  {
    id: 5,
    title: "শ্রেণি তথ্য",
    href: "/students/classes",
  },
];

export default function Academic() {
  return (
    <section className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-200">
      <SubHeading title="একাডেমিক তথ্য" />
      <ul className="list-disc list-inside space-y-3 text-blue-900 text-lg">
        {academicInfo.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="hover:underline hover:text-blue-600"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
