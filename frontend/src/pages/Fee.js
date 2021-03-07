import AppShell from "../components/AppShell";


const Fee = () => {
  return (
    <AppShell>
      <div>
        <form >
          
        </form>
      </div>
      <div >
        <h3 class="text-4xl text-gray-800 dark:text-gray-50 font-semibold mb-6">Transaction History</h3>
        <table class="rounded-md overflow-hidden w-full  dark:bg-gray-800 bg-white dark:text-gray-200 divide-y-2 divide-gray-500 dark:divide-gray-300">
          <thead>
            <tr class="text-left">
              <th class="px-4 py-3">Transaction Id</th>
              <th class="px-4 py-3">Payment Date</th>
              <th class="px-4 py-3">Semester</th>
              <th class="px-4 py-3">Payment Mode</th>
              <th class="px-4 py-3">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-gray-300 dark:divide-gray-500">
            <tr class="dark:bg-gray-800">
              <td class="px-4 py-3">Jill</td>
              <td class="px-4 py-3">Smith</td>
              <td class="px-4 py-3">I</td>
              <td class="px-4 py-3">Male</td>
              <td class="px-4 py-3">Male</td>
            </tr>
            <tr class="dark:bg-gray-800  ">
              <td class="px-4 py-3">Jill</td>
              <td class="px-4 py-3">Smith</td>
              <td class="px-4 py-3">II</td>
              <td class="px-4 py-3">Male</td>
              <td class="px-4 py-3">Male</td>
            </tr>

            <tr class="dark:bg-gray-800  ">
              <td class="px-4 py-3">Jill</td>
              <td class="px-4 py-3">Smith</td>
              <td class="px-4 py-3">III</td>
              <td class="px-4 py-3">Male</td>
              <td class="px-4 py-3">Male</td>
            </tr>
            <tr class="dark:bg-gray-800  ">
              <td class="px-4 py-3">Jill</td>
              <td class="px-4 py-3">Smith</td>
              <td class="px-4 py-3">IV</td>
              <td class="px-4 py-3">Male</td>
              <td class="px-4 py-3">Male</td>
            </tr>
            <tr class="dark:bg-gray-800  ">
              <td class="px-4 py-3">Jill</td>
              <td class="px-4 py-3">Smith</td>
              <td class="px-4 py-3">V</td>
              <td class="px-4 py-3">Male</td>
              <td class="px-4 py-3">Male</td>
            </tr>
            <tr class="dark:bg-gray-800  ">
              <td class="px-4 py-3">Jill</td>
              <td class="px-4 py-3">Smith</td>
              <td class="px-4 py-3">VI</td>
              <td class="px-4 py-3">Male</td>
              <td class="px-4 py-3">Male</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AppShell>
  );
};

export default Fee;
