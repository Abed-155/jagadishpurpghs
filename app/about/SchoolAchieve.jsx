import React from "react";
import { sscResult } from "./daga";
import { FaGraduationCap } from "react-icons/fa";
import SubHeading from "../components/SubHeading";

export default function SchoolAchieve() {
  return (
    <section className="bg-white p-4 md:p-6 rounded-lg shadow border border-blue-100">
      <SubHeading title=" বিগত সালের এস.এস.সি ফলাফল" />
      <ul className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 text-gray-700">
        {sscResult.map((item) => (
          <li
            key={item.id}
            className="bg-blue-50 p-4 rounded-lg shadow-sm text-sm flex gap-2 items-center"
          >
            <FaGraduationCap className="text-blue-800 text-4xl" />{" "}
            <div className="flex flex-col gap-1.5">
              <p>
                <strong>সাল: </strong>
                {item.year}
              </p>
              <p>
                <strong>অংশগ্রহণ: </strong>
                {item.appearance} জন
              </p>
              <p>
                <strong>কৃতকার্য: </strong>
                {item.pass} জন
              </p>
              <p>
                <strong>অকৃতকার্য: </strong>
                {item.fail} জন
              </p>
              <p>
                <strong>পাসের হার: </strong>
                {item.passRate}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
