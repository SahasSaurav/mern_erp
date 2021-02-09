import Toggle from "../components/Toggle";

const Dashboard = () => {
  return (
    <section className="bg-white dark:bg-gray-800 w-full h-screen p-6">
      <div className="grid grid-cols-3  w-full h-full ">
        {/* overview */}
        <div className="grid  col-span-2 bg-gray-200 dark:bg-gray-700 m-4 rounded-3xl px-10 py-6 shadow-xl">
          <div className="flex flex-col gap-6">
            <div className="flex items-baseline justify-between ">
              <h2 className="text-gray-700 dark:text-gray-50 text-5xl font-semibold tracking-wide font-sf-pro ">
                Overview
              </h2>
              <Toggle />
            </div>
            <div className="grid grid-cols-2 gap-6 max-h-full h-full ">
              {/* average_mark */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg "></div>
              {/* attendance */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg "></div>
              {/* subject wise mark */}
              <div className="bg-white dark:bg-gray-800 col-span-2  rounded-xl shadow-lg max-h-96"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6  bg-gray-200 dark:bg-gray-700 m-4 rounded-3xl p-6  shadow-xl">
          {/* calnedar */}
          <div className="flex flex-col rounded-xl px-4 gap-4">
            <h3 className="text-gray-700 dark:text-red-50 text-3xl font-semibold tracking-wide">
              Calendar
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-xl h-full w-full shadow-lg"></div>
          </div>
          {/* Reminder */}
          <div className="flex flex-col rounded-xl px-4 gap-4">
            <h3 className="text-gray-700 dark:text-red-50 text-3xl font-semibold tracking-wide ">
              Reminder
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-xl h-full w-full shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
