const Attendance = () => {
  const attendance = 80;
  return (
    <svg
      id="time-progress"
      viewBox="0 0 100 100"
      className=" block fill-current dark:text-gray-50 w-full p-5 "
    >
      <circle
        className="duration-500 ease-linear origin-center transform -rotate-90 stroke-current transition-stroke-dashoffset text-gray-300 dark:text-gray-600"
        cx="50"
        cy="50"
        r="44"
        data-qa="progress"
        fill="none"
        strokeDasharray="276.5 276.5"
        strokeLinecap="round"
        strokeWidth="3"
        strokeDashoffset={0}
      ></circle>
      <circle
        className={`duration-500 ease-linear origin-center transform -rotate-90 stroke-current transition-stroke-dashoffset ${attendance<75?'text-red-400 dark:text-red-500':'text-green-400 dark:text-green-500'}`}
        cx="50"
        cy="50"
        r="44"
        data-qa="progress"
        fill="none"
        strokeDasharray="276.5 276.5"
        strokeLinecap="round"
        strokeWidth="3"
        strokeDashoffset={276.5 - (attendance / 100) * 276.5}
      ></circle>
      <text
        className={`fill-current text-lighblue font-bold  ${attendance<75?'text-red-400 dark:text-red-500':'text-green-400 dark:text-green-500'}` }
        fontSize="120%"
        textAnchor="middle"
        x="50%"
        y="50%"
        dy=".3em"
      >
        {`${attendance}%`}
      </text>
      <text
        className="font-semibold tracking-widest  fill-current text-gray-700 dark:text-gray-100 darK:text-white"
        fontSize="50%"
        textAnchor="middle"
        x="50%"
        y="70%"
      >
        Attendance
      </text>
    </svg>
  );
}

export default Attendance
