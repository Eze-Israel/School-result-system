'use client';

import { useState } from 'react';
import dayjs from 'dayjs';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = () => {
  const [today] = useState(dayjs());
  const startOfMonth = today.startOf('month');
  const endOfMonth = today.endOf('month');

  const startDay = startOfMonth.day();
  const totalDays = endOfMonth.date();

  const dates = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full md:w-[400px]">
      <h3 className="text-lg font-bold text-center mb-4 text-black">
        {today.format('MMMM YYYY')}
      </h3>
      <div className="grid grid-cols-7 gap-2 text-center">
        {daysOfWeek.map((day) => (
          <div key={day} className="font-semibold text-gray-600">
            {day}
          </div>
        ))}
        {Array(startDay).fill(null).map((_, idx) => (
          <div key={idx}></div>
        ))}
        {dates.map((date) => {
          const isToday = today.date() === date;
          return (
            <div
              key={date}
              className={`rounded-full h-10 w-10 flex items-center justify-center mx-auto ${
                isToday
                  ? 'bg-blue-500 text-white font-bold'
                  : 'text-gray-800'
              }`}
            >
              {date}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
