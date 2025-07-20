import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";

export default function ContactInfo() {
  return (
    <section className="bg-blue-50 p-4 md:p-6 rounded-lg shadow-md space-y-6">
      <div className="flex items-start space-x-4">
        <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
        <div>
          <h3 className="font-semibold">ঠিকানা</h3>
          <p>
            জগদীশপুর পাবলিক গার্লস হাই স্কুল <br /> গ্রাম: জগদীশপুর, উপজেলা:
            মাধবপুর, জেলা: হবিগঞ্জ।
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <FaPhoneAlt className="text-blue-600 text-xl mt-1" />
        <div>
          <h3 className="font-semibold">ফোন</h3>
          <p>01836-225886</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <FaEnvelope className="text-blue-600 text-xl mt-1" />
        <div>
          <h3 className="font-semibold">ইমেইল</h3>
          <p>jpghs2019@gmail.com</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <IoTimeSharp className="text-blue-600 text-xl mt-1" />
        <div>
          <h3 className="font-semibold">অফিস সময়</h3>
          <p> রবি - বৃহস্পতিবার, সকাল ১০টা - বিকাল ৪টা</p>
        </div>
      </div>
    </section>
  );
}
