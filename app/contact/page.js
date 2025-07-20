import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import PageHeading from "../components/PageHeading";

import ContactForm from "./ContactForm";
import FAQ from "./FAQ";
import Head from "next/head";
import ContactInfo from "./ContactInfo";

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

      <main className="max-w-4xl mx-auto p-2 md:p-6 space-y-10">
        <PageHeading title="যোগাযোগ করুন" />

        <p className="text-gray-600 italic  text-center">
          আপনার যেকোনো জিজ্ঞাসার জন্য আমাদের সাথে যোগাযোগ করুন।
        </p>

        <ContactInfo />
        <ContactForm />
        <FAQ />
      </main>
    </>
  );
}
