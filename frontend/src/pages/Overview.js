import React from 'react'

const Overview = () => {
  return (
   <section className="bg-white w-full h-screen p-6">
     <div className="grid grid-cols-3  w-full h-full "> 
     {/* overviw */}
     <div className="grid  col-span-2 bg-gray-200 m-4 rounded-3xl px-10 py-6 shawdow-lg">
      <div className="flex flex-col gap-8">
      <h2 className="text-gray-800 text-4xl font-bold tracking-wide  ">Overview</h2>
      <div className="grid grid-cols-2 gap-6 max-h-full h-full ">
         {/* average_mark */}
       <div className="bg-white rounded-xl"></div>
       {/* attendance */}
       <div className="bg-white rounded-xl"></div>
       {/* subject wise mark */}
       <div className="bg-white col-span-2 rounded-xl"></div>
      </div>
      </div>
     </div>
      <div className="grid grid-rows-2 gap-6   bg-gray-200 m-4 rounded-3xl p-6 ">
        {/* calnedar */}
        <div className="flex flex-col rounded-xl p-4 gap-4">
          <h3 className="text-3xl">Calendar</h3>
          <div className="bg-white rounded-xl h-full w-full"></div>
        </div>
        {/* Reminder */}
        <div className="flex flex-col rounded-xl p-4 gap-4">
          <h3 className="text-3xl ">Reminder</h3>
          <div className="bg-white rounded-xl h-full w-full"></div>
        </div>
      </div>
     </div>
   </section>
  )
}

export default Overview
