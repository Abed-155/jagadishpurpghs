"use client";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-center p-6">
      {/* 404 Illustration */}
      <div className="mb-6">
        <Image
          src="/404.jpg" // আপনি images ফোল্ডারে একটি ছবি রাখতে পারেন
          alt="404 Not Found"
          width={300}
          height={300}
          className="mx-auto"
        />
      </div>

      {/* Error Code */}
      <h1 className="text-6xl font-bold text-blue-800 mb-2">404</h1>

      {/* Message */}
      <p className="text-xl text-gray-700 mb-4">
        দুঃখিত! আপনি যে পাতাটি খুঁজছেন তা পাওয়া যায়নি।
      </p>

      {/* Go Home Button */}
      <Link
        href="/"
        className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300"
      >
        হোমপেইজে ফিরে যান
      </Link>
    </main>
  );
}
