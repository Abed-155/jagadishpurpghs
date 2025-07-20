import React from "react";

export default function SchoolTitle() {
  return (
    <section className="max-w-5xl mx-auto p-2 my-4 md:p-6 space-y-10">
      <div className="bg-white max-w-5xl p-4 md:p-8 rounded-lg shadow border border-blue-100">
        <h1 className="text-2xl text-center font-bold mb-2 md:text-3xl text-blue-800">
          জগদীশপুর <br /> পাবলিক গার্লস হাই স্কুল
        </h1>
        <div className="text-center text-gray-500 text-sm md:text-lg">
          <p>গ্রাম: জগদীশপুর, উপজেলা: মাধবপুর, জেলা: হবিগন্জ</p>
          <p>স্থাপিত: ২০১৯</p>
        </div>
      </div>
    </section>
  );
}
