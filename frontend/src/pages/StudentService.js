import { Children } from "react";
import AppShell from "../components/AppShell";
import Card from "../components/Card";


const StudentService = () => {

  const cardData = [
    {
      title: 'Scrutiny Registration',
      desc: 'Apply online for reevalution of papers',
      borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
      path: <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z" ></path>,
      color:'blue',
    },
    {
      title: 'Student Backlog',
      desc: 'Apply online for backlog',
      borderRadius: '60% 40% 36% 64% / 29% 39% 61% 71%',
      path: <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z" ></path>,
      color:'purple',
    },
    {
      title: 'Backlog Registration',
      desc: 'Apply for backlof of the previous semesters',
      borderRadius: '70% 30% 42% 58% / 60% 45% 55% 40%',
      path: <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z" ></path>,
      color:'red',
    },
    {
      title: 'Additional Semester Course',
      desc: 'Apply for additional semester course',
      borderRadius: '60% 40% 32% 68% / 38% 45% 55% 62%',
      path: <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.42 0 2.13.54 2.39 1.4.12.4.45.7.87.7h.3c.66 0 1.13-.65.9-1.27-.42-1.18-1.4-2.16-2.96-2.54V4.5c0-.83-.67-1.5-1.5-1.5S10 3.67 10 4.5v.66c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-1.65 0-2.5-.59-2.83-1.43-.15-.39-.49-.67-.9-.67h-.28c-.67 0-1.14.68-.89 1.3.57 1.39 1.9 2.21 3.4 2.53v.67c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-.65c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path>,
      color:'green',
    }
  ]



  return (
    <AppShell>
      <div className="flex flex-col">
        <h2 className="mt-4 mb-10 text-4xl font-medium text-gray-800 dark:text-gray-50 ">
          Student Related Service
        </h2>
        <div className="flex flex-wrap gap-6 bg-gray-200 dark:bg-gray-700 rounded-3xl  w-full h-full  justify-start items-start ">
          {Children.toArray(cardData.map(data => (<Card {...data} />)))}
        </div>
      </div>
    </AppShell>
  );
};

export default StudentService;
