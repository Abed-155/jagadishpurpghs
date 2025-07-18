import Image from "next/image";
import SubHeading from "../components/SubHeading";

const data = [
  {
    id: 1,
    url: "/gallery/teacher-1.jpg",
  },
  {
    id: 2,
    url: "/gallery/teacher-3.jpg",
  },
  {
    id: 3,
    url: "/gallery/teacher-2.jpg",
  },
  {
    id: 4,
    url: "/gallery/teacher-3.jpg",
  },
];

export default function Teacher() {
  return (
    <section>
      <SubHeading title="শিক্ষকমন্ডলী" />
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-4">
        {data.map((item) => (
          <div key={item.id}>
            <Image
              src={item.url}
              alt="School-Teacher"
              width={400}
              height={300}
              className="rounded-lg shadow"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
