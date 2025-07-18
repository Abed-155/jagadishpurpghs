"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi"; // ✅ Import Feather icons

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Notice Board", href: "/notice-board" },
  { name: "Teachers", href: "/teachers" },
  { name: "Contact", href: "/contact" },
  { name: "Admission", href: "/admission" },
  { name: "Students", href: "/students" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;
  const activeClass =
    "text-blue-400 font-semibold underline underline-offset-4";
  const baseClass = "hover:text-blue-400 transition";

  return (
    <header className="sticky z-50 top-0">
      <nav className="bg-gray-900 text-white shadow-md ">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="school-logo"
                  width={50}
                  height={50}
                  className=" rounded-full bg-white"
                />
              </Link>
              <span className="md:text-2xl text-lg font-bold text-blue-400">
                জগদীশপুর <br />
                পাবলিক গার্লস হাই ‍ স্কুল
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${
                    isActive(item.href) ? activeClass : baseClass
                  } md:text-lg`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button with react-icons */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="focus:outline-none focus:ring-2 focus:ring-blue-400 p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <FiX className="w-6 h-6 text-white" />
                ) : (
                  <FiMenu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 px-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 ${
                  isActive(item.href) ? activeClass : baseClass
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
