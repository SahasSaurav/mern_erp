import AppShell from "../components/AppShell";


const StudentService = () => {
  return (
    <AppShell>
      <div className="flex flex-col">
        <h2 className="mt-4 mb-10 text-4xl font-medium text-gray-800 dark:text-gray-50 ">
          Student Related Service
        </h2>
        <div className="flex flex-wrap gap-6 bg-gray-200 dark:bg-gray-700 rounded-3xl  w-full h-full  justify-start items-start ">
          <div
            className=" bg-gray-50 dark:bg-blueGray-800 rounded-2xl shadow-md  hover:shadow-2xl transition-shadow duration-200"
            style={{
              maxHeight: "280px",
              height: "100%",
              maxWidth: "220px",
              width: "100%",
              aspectRatio: "3/4",
            }}
          ></div>
          <div
            className=" bg-gray-50 dark:bg-blueGray-800 rounded-2xl shadow-md  hover:shadow-2xl transition-shadow duration-200"
            style={{
              maxHeight: "280px",
              height: "100%",
              maxWidth: "220px",
              width: "100%",
              aspectRatio: "3/4",
            }}
          ></div>
          <div
            className=" bg-gray-50 dark:bg-blueGray-800 rounded-2xl shadow-md  hover:shadow-2xl transition-shadow duration-200"
            style={{
              maxHeight: "280px",
              height: "100%",
              maxWidth: "220px",
              width: "100%",
              aspectRatio: "3/4",
            }}
          ></div>
          <div
            className=" bg-gray-50 dark:bg-blueGray-800 rounded-2xl shadow-md  hover:shadow-2xl transition-shadow duration-200"
            style={{
              maxHeight: "280px",
              height: "100%",
              maxWidth: "220px",
              width: "100%",
              aspectRatio: "3/4",
            }}
          ></div>
        </div>
      </div>
    </AppShell>
  );
};

export default StudentService;
