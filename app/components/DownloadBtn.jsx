import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";

export default function DownloadBtn({ url }) {
  return (
    <Link
      href={url}
      target="_blank"
      download
      className=" bg-blue-700 w-20 flex gap-2 items-center justify-center p-2  text-white md:px-4 md:py-2 rounded hover:bg-blue-800 transition"
    >
      <FaFileDownload className="text-xl" /> PDF
    </Link>
  );
}
