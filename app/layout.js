import { Geist, Geist_Mono, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  display: "swap",
  variable: "--font-bengali",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "জগদীশপুর পাবলিক গার্লস হাই স্কুল",
  description:
    "আমাদের বিদ্যালয় একটি মানসম্মত শিক্ষা প্রতিষ্ঠান। এখানে শ্রেণিভিত্তিক তথ্য, শিক্ষক তালিকা ও ভর্তি ফর্ম পাওয়া যাবে।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerifBengali.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
