import AppShell from "../components/AppShell";
import { Link } from "react-router-dom";

const Academics = () => {
  return (
    <AppShell>
      <div >
        <h3 className="text-4xl text-gray-800 dark:text-gray-50 font-semibold mb-6">Semseter Wise CGPA</h3>
        <table className="rounded-md overflow-hidden w-full  dark:bg-gray-800 bg-white dark:text-gray-200 divide-y-2 divide-gray-500 dark:divide-gray-300">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-3">S.no</th>
              <th className="px-4 py-3">Semester</th>
              <th className="px-4 py-3">CPGA</th>
              <th className="px-4 py-3">Link</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-gray-300 dark:divide-gray-500">
            <tr className="dark:bg-gray-800">
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3">Sem I</td>
              <td className="px-4 py-3">7.76</td>
              <td className="px-4 py-3"><Link to={'/'} className="text-green-400 underline hover:no-underline">See More</Link></td>
            </tr>
            <tr className="dark:bg-gray-800  ">
              <td className="px-4 py-3">2</td>
              <td className="px-4 py-3">Sem II</td>
              <td className="px-4 py-3">7.90</td>
              <td className="px-4 py-3"><Link to={'/'} className="text-green-400 underline hover:no-underline">See More</Link></td>
            </tr>

            <tr className="dark:bg-gray-800  ">
              <td className="px-4 py-3">3</td>
              <td className="px-4 py-3">Sem III</td>
              <td className="px-4 py-3">8.42</td>
              <td className="px-4 py-3"><Link to={'/'} className="text-green-400 underline hover:no-underline">See More</Link></td>
            </tr>
            <tr className="dark:bg-gray-800  ">
              <td className="px-4 py-3">4</td>
              <td className="px-4 py-3">Sem IV</td>
              <td className="px-4 py-3">8.65</td>
              <td className="px-4 py-3"><Link to={'/'} className="text-green-400 underline hover:no-underline">See More</Link></td>
            </tr>
            <tr className="dark:bg-gray-800  ">
              <td className="px-4 py-3">5</td>
              <td className="px-4 py-3">Sem V</td>
              <td className="px-4 py-3">9.0</td>
              <td className="px-4 py-3"><Link to={'/'} className="text-green-400 underline hover:no-underline">See More</Link></td>
            </tr>
          </tbody>
        </table>
        </div>
    </AppShell>
  );
};

export default Academics;
