import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import PageHeading from "../components/PageHeading";

import ContactForm from "./ContactForm";
import FAQ from "./FAQ";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>যোগাযোগ করুন | জগদীশপুর পাবলিক গার্লস হাই স্কুল</title>
        <meta
          name="description"
          content="স্কুলের ঠিকানা, ফোন নাম্বার ও যোগাযোগ ফর্ম। আপনার যেকোনো প্রশ্নের জন্য আমাদের সাথে সরাসরি যোগাযোগ করুন।"
        />
      </Head>

      <main className="max-w-4xl mx-auto p-6 space-y-10">
        {/* Header */}
        <section className="text-center">
          <PageHeading title="যোগাযোগ করুন" />

          <p className="text-gray-600">
            আপনার যেকোনো জিজ্ঞাসার জন্য আমাদের সাথে যোগাযোগ করুন।
          </p>
        </section>

        {/* Contact Info */}
        <section className="bg-blue-50 p-6 rounded-lg shadow-md space-y-6">
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

        {/* Contact Form */}
        <ContactForm />

        <FAQ />
      </main>
    </>
  );
}
