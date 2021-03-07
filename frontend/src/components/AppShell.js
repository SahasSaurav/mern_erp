import Sidebar from './Sidebar'

const AppShell = ({children}) => {
  return (
    <>
      <Sidebar />
      <section className="bg-white dark:bg-blueGray-800 w-full min-h-screen p-6">
        <div className="grid grid-cols-3  w-full h-full ">
          {/* overview */}
          <div className="grid  col-span-2 bg-gray-200 dark:bg-gray-700 m-6 rounded-3xl px-10 py-8 shadow-xl">
           {children}
          </div>
          <div className="grid grid-cols-1 gap-6  bg-gray-200 dark:bg-gray-700 m-6 rounded-3xl px-10 py-8  shadow-xl">
            {/* calnedar */}
            <div className="flex flex-col rounded-xl gap-4">
              <h3 className="text-gray-700 dark:text-red-50 text-3xl font-semibold tracking-wide">
                Calendar
              </h3>
              <div className="bg-white dark:bg-blueGray-800 rounded-xl h-full w-full shadow-lg"></div>
            </div>
            {/* Reminder */}
            <div className="flex flex-col rounded-xl gap-4">
              <h3 className="text-gray-700 dark:text-red-50 text-3xl font-semibold tracking-wide ">
                Reminder
              </h3>
              <div className="bg-white dark:bg-blueGray-800 rounded-xl h-full w-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AppShell