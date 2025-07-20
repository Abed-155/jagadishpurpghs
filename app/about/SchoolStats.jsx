import SubHeading from "../components/SubHeading";
import { schoolStats } from "./daga";

export default function StudentStatsTable() {
  return (
    <section className="bg-white p-4 md:p-6 rounded-lg shadow border border-blue-100">
      <SubHeading title="শ্রেণিভিত্তিক শিক্ষার্থী সংখ্যা" />

      <table className=" table-auto w-full bg-blue-50 p-4 rounded-lg shadow-sm text-center">
        <thead className="bg-blue-200">
          <tr>
            <th className="border border-gray-300 p-2">Classes</th>
            <th className="border border-gray-300 p-2">Science</th>
            <th className="border border-gray-300 p-2">Humanities</th>
            <th className="border border-gray-300 p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {schoolStats.map((item) => {
            const total =
              item.students ?? (item.science || 0) + (item.huminaties || 0);
            return (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2">{item.title}</td>
                <td className="border border-gray-300 p-2">
                  {item.science !== undefined ? item.science : "-"}
                </td>
                <td className="border border-gray-300 p-2">
                  {item.huminaties !== undefined ? item.huminaties : "-"}
                </td>
                <td className="border border-gray-300 p-2">{total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
