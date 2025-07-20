import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="school-logo"
          width={50}
          height={50}
          className=" rounded-full border border-blue-50 bg-white"
        />
      </Link>
      <span className=" hidden md:block md:text-2xl text-lg font-bold text-blue-400">
        জগদীশপুর <br />
        পাবলিক গার্লস হাই ‍ স্কুল
      </span>
    </div>
  );
}
