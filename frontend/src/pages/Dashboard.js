import Attendance from "../chart/Attendance";
import AppShell from "../components/AppShell";
import Toggle from "../components/Toggle";


const Dashboard = () => {
  return (
    <AppShell>
      {/* overview */}
      <div className="flex flex-col gap-6">
        <div className="flex items-baseline justify-between ">
          <h2 className="text-gray-700 dark:text-gray-50 text-5xl font-semibold tracking-wide font-sf-pro ">
            Overview
          </h2>
          <Toggle />
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-6 max-h-full h-full  ">
          {/* average_mark */}
          <div className="bg-white col-span-2 dark:bg-blueGray-800 rounded-xl shadow-lg" >
            
          </div>
          {/* attendance */}
          <div className=" flex justify-center items-center bg-white dark:bg-blueGray-800 rounded-xl shadow-lg ">
          <Attendance />
          </div>
          {/* subject wise mark */}
          <div className="bg-white dark:bg-blueGray-800 col-span-3  rounded-xl shadow-lg"  >
            
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default Dashboard;
