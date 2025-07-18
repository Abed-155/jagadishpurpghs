// ClassesPage.jsx

"use client";

import Image from "next/image";
import Link from "next/link";

const classData = [
  {
    id: 1,
    name: "ষষ্ঠ শ্রেণি",
    students: "১৭",
    teacher: "মোঃ লোকমান উদ্দীন",
    contact: "017xxxxxxxx",
    image: "/teachers/lukman.jpg",
    pdfBook:
      "https://nctb.portal.gov.bd/site/page/f84b0f23-ccb7-41a8-9c29-983afd3d092e",
    routine: "/routines/six.pdf",
  },
  {
    id: 2,
    name: "সপ্তম শ্রেণি",
    students: "২০",
    teacher: "সুলতানা আক্তার",
    contact: "018xxxxxxxx",
    image: "/teachers/sultana.jpg",
    pdfBook:
      "https://nctb.portal.gov.bd/site/page/bc758f07-9e6e-4e7c-93ee-d3aef1c15229",
    routine: "/routines/seven.pdf",
  },
  {
    id: 3,
    name: "অষ্টম শ্রেণি",
    students: "১৩",
    teacher: "নাজরীন আক্তার",
    contact: "019xxxxxxxx",
    image: "/teachers/nazrin.jpg",
    pdfBook:
      "https://nctb.portal.gov.bd/site/page/00751775-3953-4c0d-9bd4-c4ff68760176",
    routine: "/routines/eight.pdf",
  },
  {
    id: 4,
    name: "নবম শ্রেণি",
    students: "১৪",
    teacher: "আবেদ আলী",
    contact: "016xxxxxxxx",
    image: "/teachers/abed.jpg",
    pdfBook:
      "https://nctb.portal.gov.bd/site/page/bc758f07-9e6e-4e7c-93ee-d3aef1c15229",
    routine: "/routines/nine.pdf",
  },
  {
    id: 5,
    name: "দশম শ্রেণি",
    students: "১০",
    teacher: "সোমা আক্তার",
    contact: "015xxxxxxxx",
    image: "/teachers/suma.jpg",
    pdfBook:
      "https://nctb.portal.gov.bd/site/page/bc758f07-9e6e-4e7c-93ee-d3aef1c15229",
    routine: "/routines/ten.pdf",
  },
];

export default function ClassesPage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        শ্রেণির তালিকা
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classData.map((cls) => (
          <div key={cls.id} className="bg-white p-4 shadow-md rounded-lg">
            <Image
              src={cls.image}
              alt={cls.teacher}
              width={400}
              height={400}
              className="rounded mb-4 object-cover w-full h-56"
            />
            <h2 className="text-xl font-bold text-blue-700 mb-2">{cls.name}</h2>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              মোট ছাত্রী: {cls.students} জন
            </h3>
            <p>
              <strong>শ্রেণি শিক্ষক:</strong> {cls.teacher}
            </p>
            <p>
              <strong>যোগাযোগ:</strong> {cls.contact}
            </p>
            <div className="mt-4 space-x-2">
              <a
                target="_blank"
                href={cls.pdfBook}
                className="text-sm bg-green-600 text-white py-2 px-3 rounded hover:bg-green-700"
              >
                পিডিএফ বই
              </a>
              <a
                href={cls.routine}
                download
                className="text-sm bg-blue-600 text-white py-2 px-3 rounded hover:bg-blue-700"
              >
                রুটিন
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
