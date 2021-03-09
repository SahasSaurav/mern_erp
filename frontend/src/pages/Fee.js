import AppShell from "../components/AppShell";


const Fee = () => {
  return (
    <AppShell>

      <div >
        <h3 className="text-4xl text-gray-800 dark:text-gray-50 font-semibold mb-6">Transaction History</h3>
        <table className="rounded-md overflow-hidden w-full  dark:bg-gray-800 bg-white dark:text-gray-200 divide-y-2 divide-gray-500 dark:divide-gray-300">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-3">Transaction Id</th>
              <th className="px-4 py-3">Payment Date</th>
              <th className="px-4 py-3">Semester</th>
              <th className="px-4 py-3">Payment Mode</th>
              <th className="px-4 py-3">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-gray-300 dark:divide-gray-500">
            <tr className="dark:bg-gray-800">
              <td className="px-4 py-3">Jill</td>
              <td className="px-4 py-3">Smith</td>
              <td className="px-4 py-3">I</td>
              <td className="px-4 py-3">Male</td>
              <td className="px-4 py-3">Male</td>
            </tr>
            <tr className="dark:bg-gray-800  ">
              <td className="px-4 py-3">Jill</td>
              <td className="px-4 py-3">Smith</td>
              <td className="px-4 py-3">II</td>
              <td className="px-4 py-3">Male</td>
              <td className="px-4 py-3">Male</td>
            </tr>

            <tr className="dark:bg-gray-800  ">
              <td className="px-4 py-3">Jill</td>
              <td className="px-4 py-3">Smith</td>
              <td className="px-4 py-3">III</td>
              <td className="px-4 py-3">Male</td>
              <td className="px-4 py-3">Male</td>
            </tr>
            <tr className="dark:bg-gray-800  ">
              <td className="px-4 py-3">Jill</td>
              <td className="px-4 py-3">Smith</td>
              <td className="px-4 py-3">IV</td>
              <td className="px-4 py-3">Male</td>
              <td className="px-4 py-3">Male</td>
            </tr>
            <tr className="dark:bg-gray-800  ">
              <td className="px-4 py-3">Jill</td>
              <td className="px-4 py-3">Smith</td>
              <td className="px-4 py-3">V</td>
              <td className="px-4 py-3">Male</td>
              <td className="px-4 py-3">Male</td>
            </tr>
            <tr className="dark:bg-gray-800  ">
              <td className="px-4 py-3">Jill</td>
              <td className="px-4 py-3">Smith</td>
              <td className="px-4 py-3">VI</td>
              <td className="px-4 py-3">Male</td>
              <td className="px-4 py-3">Male</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AppShell>
  );
};

export default Fee;
