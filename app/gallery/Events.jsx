import Image from "next/image";
import SubHeading from "../components/SubHeading";

const data = [
  {
    id: 1,
    url: "/gallery/event-1.jpg",
  },
  {
    id: 2,
    url: "/gallery/event-2.jpg",
  },
  {
    id: 3,
    url: "/gallery/event-3.jpg",
  },
  {
    id: 4,
    url: "/gallery/event-4.jpg",
  },
];

export default function Events() {
  return (
    <section>
      <SubHeading title="ক্রিড়া ও সাংস্কৃতিক অনুষ্ঠান" />
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
