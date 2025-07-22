import React from "react";

export default function PageHeading({ title }) {
  return (
    <h1 className="text-xl md:text-3xl font-bold text-center text-blue-800 my-6">
      {title}
    </h1>
  );
}
