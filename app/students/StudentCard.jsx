import { FaUser } from "react-icons/fa";

export default function StudentCard({ students }) {
  if (!students || students.length === 0) {
    return (
      <div className="p-4 text-center text-xl text-red-500">
        Student Not Found
      </div>
    );
  }

  return (
    <div className="p-4 grid md:grid-cols-3 gap-4">
      {students.map((student) => (
        <div
          key={student.id}
          className="bg-blue-50 p-4 rounded-lg shadow-sm flex gap-2 items-center"
        >
          <FaUser className="text-blue-600 text-3xl" />
          <div className="text-gray-700">
            <p>
              <span className="font-semibold">Name:</span> {student.name}
            </p>
            <p>
              <span className="font-semibold">Class:</span> {student.class}
            </p>
            <p>
              <span className="font-semibold">Roll:</span> {student.roll}
            </p>
            <p>
              <span className="font-semibold">Group:</span> {student.group}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
