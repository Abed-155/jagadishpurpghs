import React from "react";

export default function SubHeading({ title }) {
  return (
    <h2 className="text-lg md:text-2xl font-semibold mb-4 text-blue-800">
      {title}
    </h2>
  );
}
