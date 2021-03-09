import React from 'react'

const Card = ({title,desc,borderRadius,path,color}) => {
  return (
    <div
      className=" flex flex-col justify-center  gap-y-3 items-center p-6 bg-gray-50 dark:bg-blueGray-800  text-gray-800 dark:text-gray-100 rounded-2xl shadow-md  hover:shadow-2xl transition-shadow duration-200"
      style={{
        maxHeight: "280px",
        height: "100%",
        maxWidth: "220px",
        width: "100%",
        aspectRatio: "3/4",
      }}
    >
      <div className={`bg-${color}-100 p-4 mx-8`} style={{ borderRadius: borderRadius }} >
        <svg viewBox="0 0 24 24" className={`w-16 h-16 stroke-1 fill-current text-${color}-400 dark:text-${color}-500 `} aria-hidden="true">
         {path}
        </svg>
      </div>
      <h3 className="text-lg text-center font-medium">{title}</h3>
      <p className="text-center ">{desc}</p>
    </div>
  )
}

export default Card
