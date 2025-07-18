import Link from "next/link";
import { FaLongArrowAltRight, FaRegHandPointRight } from "react-icons/fa";

const impLink = [
  {
    id: 1,
    title: "ভর্তি তথ্য",
    url: "/admission",
  },
  {
    id: 2,
    title: "নোটিশ বোর্ড",
    url: "/notice-board",
  },
  {
    id: 3,
    title: " শিক্ষার্থী",
    url: "/students",
  },
  {
    id: 4,
    title: "শিক্ষকবৃন্দ",
    url: "/teachers",
  },
  {
    id: 5,
    title: "যোগাযোগ",
    url: "/contact",
  },
];

export default function ImportantLink() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-3 text-blue-300">
        গুরুত্বপূর্ণ লিংক
      </h3>
      <ul className="space-y-2 text-sm">
        {impLink.map((item) => (
          <li key={item.id} className="flex gap-1 items-center">
            <FaLongArrowAltRight />
            <Link href={item.url} className="hover:text-blue-400 underline">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
