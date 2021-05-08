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
              <td className="px-4 py-3">17366ffhggh61Kaasdw</td>
              <td className="px-4 py-3">Smith</td>
              <td className="px-4 py-3">I</td>
              <td className="px-4 py-3">Challan</td>
              <td className="px-4 py-3">65000</td>
            </tr>
            <tr className="dark:bg-gray-800  ">
              <td className="px-4 py-3">17366ffhggh61Kakjhj</td>
              <td className="px-4 py-3">Smith</td>
              <td className="px-4 py-3">II</td>
              <td className="px-4 py-3">Online</td>
              <td className="px-4 py-3">65000</td>
            </tr>

            <tr className="dark:bg-gray-800  ">
              <td className="px-4 py-3">17366ffhggh61Kaasay</td>
              <td className="px-4 py-3">Smith</td>
              <td className="px-4 py-3">III</td>
              <td className="px-4 py-3">Online</td>
              <td className="px-4 py-3">72000</td>
            </tr>
            <tr className="dark:bg-gray-800  ">
              <td className="px-4 py-3">17366ffhggh61Kakaia</td>
              <td className="px-4 py-3">Smith</td>
              <td className="px-4 py-3">IV</td>
              <td className="px-4 py-3">Challan</td>
              <td className="px-4 py-3">72000</td>
            </tr>
            <tr className="dark:bg-gray-800  ">
              <td className="px-4 py-3">17366ffhggh61Kahhhg</td>
              <td className="px-4 py-3">Smith</td>
              <td className="px-4 py-3">V</td>
              <td className="px-4 py-3">Online</td>
              <td className="px-4 py-3">80000</td>
            </tr>
            <tr className="dark:bg-gray-800  ">
              <td className="px-4 py-3">17366ffhggh61Kaehnll</td>
              <td className="px-4 py-3">Smith</td>
              <td className="px-4 py-3">VI</td>
              <td className="px-4 py-3">Online</td>
              <td className="px-4 py-3">80000</td>
            </tr>
          </tbody>
        </table>
        <h3 className=" mt-5 text-4xl text-gray-800 dark:text-gray-50 font-semibold mb-6">Fee Payment</h3>
        <form action="" className=" space-y-5">
         <div className="space-y-1">
         <label htmlFor="feetype"  className=" block text-lg text-white font-medium">Fee Categories</label>
          <select name="feetype" id="feetype" className="block p-4 text-white  bg-gray-800 rounded-lg ">
          <option value="" className="hidden">Select the Fee Catgories</option>
          <option value="">Semseter Fee</option>
          <option value="">Scrutiny Fee</option>
          <option value="">Student Backlog fee</option>
          <option value="">Additional Semseter fee</option>
          </select>
         </div>
         <div className="space-y-1">
         <label htmlFor="semester" className=" block text-lg text-white font-medium">Select your Semester  to pay fee</label>
          <select name="semester" id="semester" className="block p-4 text-white  bg-gray-800 rounded-lg ">
            <option value="" className="hidden">Select the Semester</option>
            <option value="I">Semseter I</option>
            <option value="II">Semseter II</option>
            <option value="III">Semseter III</option>
            <option value="IV">Semseter IV</option>
            <option value="V">Semseter V</option>
            <option value="VI">Semseter VI</option>
          </select>
         </div>
          <button className="p-4 text-white transition-colors duration-300 bg-blue-500 hover:bg-blue-600 rounded ">Procced to Pay fee</button>
        </form>
      </div>
    </AppShell>
  );
};

export default Fee;
