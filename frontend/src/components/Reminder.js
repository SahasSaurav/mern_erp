import { Children } from 'react'
import { Link } from 'react-router-dom'

const Reminder = () => {
  const reminders = [{
    title: 'Covid 2nd Wave guidelines for students',
    posted: '01-March-2021'
  }, {
    title: 'Exam guides for teachers and students',
    posted: '15-April-2021'
  }, {
    title: 'Final year project submision guidelines',
    posted: '28-April-2021'
  }, {
    title: 'Student Notice for NAD Registration',
    posted: '2-Februray-2021'
  }]
  return (
    <div className="flex flex-col space-y-5 p-4">
      {Children.toArray(reminders.map(reminder => (
        <div className="flex flex-col  bg-gray-700  font-medium p-4 text-white rounded-lg">
          <p className="">{reminder.title}</p>
          <div className="flex justify-between ">
            <span className="text-red-500">{reminder.posted}</span>
            <Link className="block  text-green-400 underline hover:no-underline" to={'/seemore'}>Read more</Link>
          </div>
        </div>)))}
    </div>
  )
}

export default Reminder
