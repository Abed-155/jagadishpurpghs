"use client";

import { useState } from "react";
import PageHeading from "../components/PageHeading";
import Head from "next/head";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    nameBn: "",
    nameEn: "",
    fatherBn: "",
    fatherEn: "",
    fatherNID: "",
    motherBn: "",
    motherEn: "",
    motherNID: "",
    birthReg: "",
    birth: "",
    class: "",
    phone: "",
    address: "",
    studentPhoto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে তুমি সাবমিট হ্যান্ডলার লিখবে, যেমন API কল বা অন্য কিছু
    alert("আপনার আবেদন সফলভাবে জমা হয়েছে!");
    console.log(formData);
  };

  return (
    <>
      <Head>
        <title>ভর্তি তথ্য | জগদীশপুর পাবলিক গার্লস হাই স্কুল</title>
        <meta
          name="description"
          content="ভর্তি সংক্রান্ত সকল তথ্য, নিয়মাবলি, যোগ্যতা এবং আবেদন ফর্ম ডাউনলোড।"
        />
      </Head>
      <main className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
        <PageHeading title=" ভর্তির আবেদন ফর্ম" />

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          encType="multipart/form-data"
        >
          {/* Student Name */}
          <div>
            <label className="block mb-1 font-semibold">
              ছাত্রের পূর্ণ নাম (বাংলা)
            </label>
            <input
              type="text"
              name="nameBn"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">
              Student Full Name (English)
            </label>
            <input
              type="text"
              name="nameEn"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          {/* Father's Info */}
          <div>
            <label className="block mb-1 font-semibold">
              পিতার নাম (বাংলা)
            </label>
            <input
              type="text"
              name="fatherBn"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">
              Father's Name (English)
            </label>
            <input
              type="text"
              name="fatherEn"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              পিতার জাতীয় পরিচয়পত্র নম্বর
            </label>
            <input
              type="text"
              name="fatherNID"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          {/* Mother's Info */}
          <div>
            <label className="block mb-1 font-semibold">
              মাতার নাম (বাংলা)
            </label>
            <input
              type="text"
              name="motherBn"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">
              Mother's Name (English)
            </label>
            <input
              type="text"
              name="motherEn"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">
              মাতার জাতীয় পরিচয়পত্র নম্বর
            </label>
            <input
              type="text"
              name="motherNID"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          {/* Birth and Admission */}
          <div>
            <label className="block mb-1 font-semibold">
              জন্ম নিবন্ধন নম্বর
            </label>
            <input
              type="text"
              name="birthReg"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">জন্ম তারিখ</label>
            <input
              type="date"
              name="birth"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">ভর্তির শ্রেণি</label>
            <select
              name="class"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
            >
              <option value="">-- শ্রেণি নির্বাচন করুন --</option>
              <option value="Nursery">৬ষ্ঠ শ্রণি</option>
              <option value="One">৭ম শ্রেণি</option>
              <option value="Two">৮ম শ্রেণি</option>
              <option value="Three">৯শ শ্রেণি</option>
            </select>
          </div>

          {/* Contact */}
          <div>
            <label className="block mb-1 font-semibold">মোবাইল নম্বর</label>
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold">ঠিকানা</label>
            <textarea
              name="address"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          {/* Photo Upload */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold">ছবি আপলোড করুন</label>
            <input
              type="file"
              name="studentPhoto"
              accept="image/*"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2 bg-white"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-800 text-white font-semibold py-3 rounded hover:bg-blue-900 transition"
            >
              আবেদন জমা দিন
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
