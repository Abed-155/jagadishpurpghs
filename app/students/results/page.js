"use client";

import PageHeading from "@/app/components/PageHeading";
import { useState } from "react";

export default function ExamResult() {
  const [form, setForm] = useState({
    class: "",
    exam: "",
    year: "",
    roll: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // এখানে আপনি API কল করতে পারেন
    alert(
      `রেজাল্ট খোঁজা হচ্ছে:\nClass: ${form.class}\nExam: ${form.exam}\nYear: ${form.year}\nRoll: ${form.roll}`
    );
  };

  return (
    <main className="max-w-5xl mx-auto p-2 md:p-6 space-y-12">
      <PageHeading title="পরীক্ষার ফলাফল" />
      <section className="bg-white max-w-3xl mx-auto my-6 p-6 rounded-lg shadow border border-blue-100">
        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              শ্রেণি
            </label>
            <select
              name="class"
              value={form.class}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-md"
            >
              <option value="">নির্বাচন করুন</option>
              <option value="six">৬ষ্ঠ</option>
              <option value="seven">৭ম</option>
              <option value="eight">৮ম</option>
              <option value="nine">৯ম</option>
              <option value="ten">১০ম</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              পরীক্ষার নাম
            </label>
            <select
              name="exam"
              value={form.exam}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-md"
            >
              <option value="">নির্বাচন করুন</option>
              <option value="first-term">১ম সাময়িক পরীক্ষা</option>
              <option value="second-term">২য় সাময়িক পরীক্ষা</option>
              <option value="pre-test">প্রি-টেস্ট পরীক্ষা</option>
              <option value="final">বার্ষিক পরীক্ষা</option>
              <option value="test">টেস্ট পরীক্ষা</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              পরীক্ষার বছর
            </label>
            <select
              name="year"
              value={form.year}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-md"
            >
              <option value="">নির্বাচন করুন</option>
              {Array.from({ length: 6 }).map((_, i) => {
                const year = new Date().getFullYear() - i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              রোল নম্বর
            </label>
            <input
              type="text"
              name="roll"
              value={form.roll}
              onChange={handleChange}
              required
              placeholder="আপনার রোল নম্বর লিখুন"
              className="w-full mt-1 px-4 py-2 border rounded-md"
            />
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              ফলাফল দেখুন
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
