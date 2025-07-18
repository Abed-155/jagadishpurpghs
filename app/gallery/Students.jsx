import Image from "next/image";
import SubHeading from "../components/SubHeading";

const data = [
  {
    id: 1,
    url: "/gallery/student-1.jpg",
  },
  {
    id: 2,
    url: "/gallery/student-2.jpg",
  },
  {
    id: 3,
    url: "/gallery/student-3.jpg",
  },
  {
    id: 4,
    url: "/gallery/student-4.jpg",
  },
];

export default function Students() {
  return (
    <section>
      <SubHeading title="শিক্ষার্থীবৃন্দ" />
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-4">
        {data.map((item) => (
          <div key={item.id}>
            <Image
              src={item.url}
              alt="School-Students"
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
