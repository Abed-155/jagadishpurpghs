import {
  FaFacebook,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import ImportantLink from "./ImportantLink";
import EducationalLink from "./EducationalLink";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        <ImportantLink />
        <EducationalLink />

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-300">যোগাযোগ</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" />
              জগদীশপুর, মাধবপুর, হবিগঞ্জ।
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400" />
              ০১৮৩৬-২২৫৮৮৬
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              jpghs2019@gmail.com
            </li>
          </ul>

          {/* Social */}
          <div className="mt-4 flex gap-4">
            <a
              href="https://facebook.com/jpghs.2019"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl hover:text-blue-500" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} জগদীশপুর পাবলিক গার্লস হাই স্কুল.
        সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
}
