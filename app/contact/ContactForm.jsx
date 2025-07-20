"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";
import SubHeading from "../components/SubHeading";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_shei09l",
        "template_vx2kw1r",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "MhPI3boOZuyGdBsho"
      )
      .then(
        () => {
          setStatus("✅ আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus(
            "❌ বার্তা পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।"
          );
        }
      );
  };

  return (
    <section className="bg-blue-50 p-4 md:p-6 rounded-lg shadow-md space-y-6">
      <SubHeading title="ই-মেইল করুন" />
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          name="name"
          type="text"
          placeholder="আপনার নাম"
          className="border border-gray-300 bg-white rounded p-2 col-span-1"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="আপনার ইমেইল"
          className="border border-gray-300 bg-white rounded p-2 col-span-1"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="বার্তা লিখুন"
          rows="5"
          className="border border-gray-300 bg-white rounded p-2 md:col-span-2"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className="flex items-center justify-center bg-blue-700 text-white py-2 px-6 rounded hover:bg-blue-800 transition md:col-span-2"
        >
          <FaPaperPlane className="mr-2" /> পাঠান
        </button>
      </form>
      {status && <p className="text-green-600 mt-4">{status}</p>}
    </section>
  );
}
