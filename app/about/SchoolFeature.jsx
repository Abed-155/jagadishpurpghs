import React from "react";
import { schoolFeature } from "./daga";
import { FaLongArrowAltRight } from "react-icons/fa";
import SubHeading from "../components/SubHeading";

export default function SchoolFeature() {
  return (
    <section className="bg-white p-6 rounded-lg shadow border border-blue-100">
      <SubHeading title=" স্কুলের বৈশিষ্ট্য" />
      <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
        {schoolFeature.map((item) => (
          <li
            key={item.id}
            className="bg-blue-50 p-4 rounded-lg shadow-sm flex gap-2 items-center"
          >
            <FaLongArrowAltRight className="text-blue-800 text-lg" />{" "}
            {item.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
