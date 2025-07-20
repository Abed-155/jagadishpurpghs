"use client";

import { useEffect, useState } from "react";

export default function DateDisplay() {
  const [dateInfo, setDateInfo] = useState({
    english: "",
    bangla: "",
  });

  useEffect(() => {
    const now = new Date();

    // English Date Format
    const englishDate = now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Bengali Date Format
    const banglaDate = now.toLocaleDateString("bn-BD", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setDateInfo({
      english: englishDate,
      bangla: banglaDate,
    });
  }, []);

  return (
    <div className="bg-white max-w-5xl mx-auto p-2 md:p-6  flex justify-between items-center ">
      <p className="text-blue-700 text-sm font-medium">{dateInfo.bangla}</p>
      <p className="text-gray-600 text-sm mt-1">({dateInfo.english})</p>
    </div>
  );
}
